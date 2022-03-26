<template>
  <div class="container pt-6">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/paintings">水彩創作</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ painting.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ painting.title }}</h2>
        <div>{{ painting.content }}</div>
        <div>{{ painting.description }}</div>
        <img :src="painting.imageUrl" class="img-fluid mb-3" />
      </article>
      <div class="col-4">
        <div class="h5">畫作年份：{{ painting.year }}</div>
        <hr />
        <button type="button" class="btn btn-outline-danger" @click="addToCollection(painting.id)">
          加入收藏
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      id: '',
      painting: {},
    };
  },
  methods: {
    getPainting() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then((res) => {
          this.painting = res.data.product;
          this.isLoading = false;
        })
        .catch((res) => {
          this.isLoading = false;
          this.$httpMessageState(res.response, '錯誤訊息');
        });
    },
    addToCollection(id, qty = 1) {
      this.isLoading = true;

      const collection = {
        product_id: id,
        qty,
      };

      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, {
          data: collection,
        })
        .then((res) => {
          this.isLoading = false;
          this.$httpMessageState(res, '加入收藏');
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err, '加入收藏');
        });
    },
  },
  mounted() {
    this.id = this.$route.params.paintingId;
    this.getPainting();
  },
};
</script>
