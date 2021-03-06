<template>
  <Loading :active="isLoading" :z-index="1060" />
  <div class="container pt-6 pt-lg-7">
    <Swiper
      :slides-per-view="1"
      :space-between="0"
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="painting in paintings" :key="painting.id">
        <div
          class="swiper-painting"
          :style="{ backgroundImage: `url(${painting.imageUrl})` }"
        ></div>
      </SwiperSlide>
    </Swiper>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          href="#"
          data-toggle="tab"
          class="nav-link"
          :class="{ active: category === '' }"
          @click.prevent="getPaintings"
          >所有創作</a
        >
      </li>
      <li class="nav-item" v-for="painting in paintingsByCategory" :key="painting.id">
        <a
          href="#"
          data-toggle="tab"
          class="nav-link"
          :class="{ active: category === painting.category }"
          @click.prevent="getPaintings(1, painting.category)"
          >{{ painting.category }}</a
        >
      </li>
    </ul>

    <ul class="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <li v-for="painting in paintings" :key="painting.id" class="col position-relative mt-4">
        <span class="tag text-white">{{ painting.category }}</span>
        <div
          class="card-image border border-bottom-0 border-primary rounded-top"
          :style="{ backgroundImage: `url(${painting.imageUrl})` }"
        ></div>
        <div class="painting-card-info d-flex align-items-center justify-content-around">
          <a href="#" class="favorite" @click.prevent="toggleFavorite(painting.id)">
            <i
              v-if="favorite.includes(painting.id)"
              class="bi bi-suit-heart-fill fs-4 text-white"
            ></i>
            <i v-else class="bi bi-suit-heart fs-4 text-white"></i>
          </a>
          <h3>{{ painting.title }}</h3>
          <span>{{ painting.size }}</span>
        </div>
        <button
          type="button"
          class="card-btn btn btn-info btn-view"
          :disabled="state.paintingLoading === painting.id || !painting.is_enabled"
          @click="getPainting(painting.id)"
        >
          <span
            class="spinner-border spinner-grow-sm"
            v-if="state.paintingLoading === painting.id"
          ></span>
          欣賞畫作
        </button>
        <button
          type="button"
          class="card-btn btn btn-primary text-white btn-collect"
          :disabled="state.paintingLoading === painting.id || !painting.is_enabled"
          @click="addToCollection(painting.id, painting.title)"
        >
          <span
            class="spinner-border spinner-grow-sm"
            v-if="state.paintingLoading === painting.id"
          ></span>
          加入收藏
        </button>
      </li>
    </ul>

    <div class="d-flex justify-content-center my-4">
      <PaginationVue :pages="pagination" @emit-page="getPaintings" />
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import emitter from '@/utilities/emitter';
import PaginationVue from '@/components/Pagination.vue';

export default {
  data() {
    return {
      isLoading: false,
      paintings: [],
      category: '',
      allPaintings: [],
      state: { paintingLoading: '' },
      paintingsByCategory: [],
      pagination: {},
      modules: [Navigation, Pagination],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
    };
  },
  components: { Swiper, SwiperSlide, PaginationVue },
  methods: {
    getPaintings(page = 1, category) {
      this.category = '';
      this.isLoading = true;

      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      if (category) {
        this.category = category;
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`;
      }
      this.$http
        .get(url)
        .then((res) => {
          this.paintings = res.data.products;
          this.isLoading = false;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },
    getAllPaintings() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.allPaintings = res.data.products;
          this.isLoading = false;
          function filterByCategory(painting, index, arr) {
            return arr.findIndex((p) => painting.category === p.category) === index;
          }
          this.paintingsByCategory = this.allPaintings.filter(filterByCategory);
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },
    getPainting(id) {
      this.$router.push(`/painting/${id}`);
    },
    addToCollection(id, title, qty = 1) {
      this.state.paintingLoading = id;
      const collection = { product_id: id, qty };
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, {
          data: collection,
        })
        .then((res) => {
          this.state.paintingLoading = '';
          emitter.emit('get-collection');
          this.$httpMessageState(res, '加入收藏', title);
        })
        .catch((err) => {
          this.state.paintingLoading = '';
          this.$httpMessageState(err, '加入收藏', title);
        });
    },
    toggleFavorite(id) {
      const favoriteIndex = this.favorite.findIndex((paintingId) => paintingId === id);
      if (favoriteIndex === -1) {
        this.favorite.push(id);
      } else {
        this.favorite.splice(favoriteIndex, 1);
      }
    },
  },
  watch: {
    favorite: {
      handler() {
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
      },
      deep: true,
    },
  },
  mounted() {
    this.getPaintings();
    this.getAllPaintings();
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  display: none;
  margin-bottom: 1.5rem;
}
.nav-tabs {
  border-bottom: 0;
  flex-wrap: nowrap;
  display: -webkit-box;
  overflow-y: hidden;
  overflow-x: auto;
}
.nav-item {
  border-bottom: 1px solid $french-lilac-dark1;
}
.tag {
  position: absolute;
  left: 20px;
  top: 0;
  padding: 10px;
  background-color: $martinique;
  writing-mode: vertical-lr;
  letter-spacing: 5px;
}
.card-image {
  height: 250px;
  background-position: center center;
  background-size: cover;
}
.painting-card-info {
  color: $martinique-light1;
  padding: 3px 0;
  border: 1px solid $french-lilac;
  border-top: none;
  .favorite {
    position: absolute;
    top: 10px;
    right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  h3 {
    width: 55%;
    font-size: 1.25rem;
    margin-bottom: 0;
  }
  span {
    border-left: 1px solid $french-lilac;
    font-size: 1rem;
    padding: 8px 0px 8px 8px;
  }
}
.card-btn {
  width: 50%;
  margin-top: -1px;
}

.btn-view {
  border-radius: 0;
  border-bottom-left-radius: 0.25rem;
}
.btn-collect {
  border-radius: 0;
  border-bottom-right-radius: 0.25rem;
}
@include media-breakpoint-up(md) {
  .swiper {
    display: block;
  }
  .swiper-painting {
    height: 35vh;
    background-position: center center;
    background-size: cover;
  }
  .nav-tabs {
    border-bottom: 1px solid $french-lilac-dark1;
    overflow-y: visible;
    overflow-x: visible;
  }
  .nav-item {
    border-bottom: 0px;
  }
}
@include media-breakpoint-up(lg) {
  .swiper-painting {
    height: 40vh;
  }
}
</style>
