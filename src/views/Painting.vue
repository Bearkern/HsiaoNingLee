<template>
    <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container pt-6 pt-lg-7">
    <nav aria-label="breadcrumb" class="fs-5">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/paintings">水彩創作</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ painting.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <div class="painting-group col-12 col-lg-8 d-flex justify-content-center">
        <div class="painting-frame">
          <div
            class="painting-image"
            :style="{ backgroundImage: `url(${painting.imageUrl})` }"
          ></div>
        </div>
      </div>
      <div class="painting-detail col-12 col-lg-4 my-3 d-flex flex-column">
        <h2>{{ painting.title }}</h2>
        <h3>
          創作年份：<span>{{ painting.year }}</span>
        </h3>
        <h3>
          畫作大小：<span>{{ painting.size }}</span>
        </h3>
        <h3>創作理念：</h3>
        <p>{{ painting.description }}</p>
        <button
          type="button"
          class="btn btn-primary text-white"
          :disabled="state.paintingLoading === painting.id || !painting.is_enabled"
          @click="addToCollection(painting.id, painting.title)"
        >
          <span
            class="spinner-border spinner-grow-sm"
            v-if="state.paintingLoading === painting.id"
          ></span>
          加入收藏
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utilities/mitt';

export default {
  data() {
    return {
      isLoading: false,
      id: '',
      painting: {},
      state: { paintingLoading: '' },
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
    addToCollection(id, title, qty = 1) {
      this.state.paintingLoading = id;
      const collection = {
        product_id: id,
        qty,
      };

      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, {
          data: collection,
        })
        .then((res) => {
          emitter.emit('get-collection');
          this.state.paintingLoading = '';
          this.$httpMessageState(res, '加入收藏', title);
        })
        .catch((err) => {
          this.state.paintingLoading = '';
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

<style lang="scss" scoped>
.breadcrumb-item a {
  text-decoration: none;
}
.painting-frame {
  @include painting-frame(200px, 80%, 8vh, 6vw);
}

.painting-detail {
  h2 {
    color: $kimberly-dark;
    font-size: 1.75rem;
    border-bottom: 1px solid $martinique;
    padding-bottom: 5px;
    margin-bottom: 16px;
  }
  h3 {
    color: $french-lilac-dark1;
    font-size: 1.25rem;
    span {
      color: $kimberly-dark;
    }
  }
  p {
    color: $martinique-light2;
    font-size: 1.25rem;
  }
}

@include media-breakpoint-up(md) {
  .painting-frame {
    @include painting-frame(400px, 100%, 5vw, 5vh);
  }
}
@include media-breakpoint-up(lg) {
  .painting-frame {
    @include painting-frame(500px, 100%, 3vw, 5vh);
  }
}
</style>
