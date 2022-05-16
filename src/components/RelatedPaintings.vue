<template>
  <Swiper :breakpoints="swiperOptions.breakpoints" :modules="modules" navigation>
    <SwiperSlide v-for="painting in paintings" :key="painting.id">
      <ul class="list-unstyled col">
        <li class="col position-relative mt-4">
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
          <button type="button" class="card-btn btn btn-info" @click="getPainting(painting.id)">
            欣賞畫作
          </button>
        </li>
      </ul>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';

export default {
  data() {
    return {
      modules: [Navigation],
      swiperOptions: {
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          992: { slidesPerView: 4, spaceBetween: 30 },
        },
      },
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
    };
  },
  components: { Swiper, SwiperSlide },
  props: {
    paintings: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    addToCollection(id, title) {
      this.$emit('add-to-collection', id, title);
    },
    getPainting(id) {
      this.$router.push(`/painting/${id}`);
      this.$emit('get-painting', id);
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
};
</script>

<style lang="scss" scoped>
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
  width: 100%;
  margin-top: -1px;
}
</style>
