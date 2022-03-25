<template>
  <div class="container p-0">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <swiper
      class="pt-5"
      :slides-per-view="1"
      :space-between="0"
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="painting in paintings" :key="painting.id">
        <div
          style="height: 600px; background-position: center center; background-size: cover"
          :style="{
            backgroundImage: `url(${painting.imageUrl})`,
          }"
        ></div>
      </swiper-slide>
    </swiper>

    <ul class="nav nav-tabs mt-4">
      <li class="nav-item"><a href="#" class="nav-link active">所有創作</a></li>
      <li class="nav-item" v-for="category in categorys" :key="category.id">
        <a href="#" class="nav-link">{{ category.category }}</a>
      </li>
    </ul>

    <div class="container mt-4">
      <ul class="paintings-card list-unstyled row row-cols-4">
        <li v-for="painting in paintings" :key="painting.id" class="col position-relative mt-3">
          <span class="tag">{{ painting.category }}</span>
          <div
            class="card-image"
            style="height: 200px; background-position: center center; background-size: cover"
            :style="{ backgroundImage: `url(${painting.imageUrl})` }"
          ></div>
          <div class="d-flex align-items-center justify-content-between paintings-card-info">
            <i class="favorite bi bi-suit-heart fs-4"></i>
            <h3>{{ painting.title }}</h3>
            <span>{{ painting.size }}</span>
          </div>
          <button href="#" class="collect btn btn-primary">查看細節</button>
          <button href="#" class="collect btn btn-secondary">加入收藏</button>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-center">
      <PaginationVue :pages="pagination" @emit-page="getPaintings"></PaginationVue>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import PaginationVue from '@/components/Pagination.vue';

export default {
  data() {
    return {
      isLoading: false,
      paintings: [],
      categorys: [],
      pagination: {},
      modules: [Navigation, Pagination],
    };
  },
  components: { Swiper, SwiperSlide, PaginationVue },
  methods: {
    getPaintings(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          this.paintings = res.data.products;
          this.isLoading = false;
          this.pagination = res.data.pagination;
          console.log(res);

          function filterByCategory(painting, index, arr) {
            return arr.findIndex((p) => painting.category === p.category) === index;
          }
          this.categorys = this.paintings.filter(filterByCategory);
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },
  },
  mounted() {
    this.getPaintings();
  },
};
</script>

<style lang="scss" scoped>
.paintings-card .tag {
  position: absolute;
  left: 20px;
  top: 0;
  padding: 10px;
  background-color: $martinique;
  color: #eaf0ed;
  writing-mode: vertical-lr;
  letter-spacing: 5px;
}
.paintings-card-info {
  font-size: 20px;
  border: 1px solid #eaf0ed;
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
    font-size: 20px;
    border-right: 1px solid #eaf0ed;
  }
  span {
    font-size: 16px;
    padding: 16px 0;
  }
}
.collect {
  width: 50%;
  margin-top: -1px;
  text-align: center;
}
</style>
