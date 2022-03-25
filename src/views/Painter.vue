<template>
  <div class="container p-0">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <swiper class="pt-5"
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
    <div class="mt-4">
      <img class="painter" src="../assets/images/LeeHsiaoNing.jpeg" alt="Lee Hsiao Ning" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

img.painter {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>

<script>
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

export default {
  data() {
    return {
      isLoading: false,
      paintings: [],
      modules: [Navigation, Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getPaintings() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.paintings = res.data.products;
          this.isLoading = false;
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
