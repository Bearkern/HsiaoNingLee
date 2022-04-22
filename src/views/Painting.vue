<template>
  <Loading :active="isLoading" :z-index="1060" />
  <div class="container pt-6 pt-lg-7">
    <nav aria-label="breadcrumb" class="fs-5">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/paintings">水彩創作</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ painting.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center mb-4">
      <div class="painting-group col-12 col-lg-8 d-flex justify-content-center mb-4">
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
  <div class="collection-notice bg-info mb-4">
    <div class="container py-4">
      <h2>收藏須知</h2>
      <ul>
        <li>此網站之收藏功能僅做為建檔，通知藝術家畫展資訊使用。</li>
        <li>
          有意收藏畫作者，請直接私訊李曉寧藝術家
          <a
            href="https://www.facebook.com/leehsiaolin"
            class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
            target="_blank"
          >
            <i class="bi bi-facebook fs-3"></i>
          </a>
          或致電 0935-509498
        </li>
        <li>如需欣賞真跡，請至藝術家個人畫展、聯展，或與藝術家聯繫。</li>
        <li>當拿到畫作時，只有作品不附畫框。</li>
        <li>如有意收藏畫作，可選擇寄送(運費自付)、或與藝術家聯繫領取位置。</li>
        <li>作品附保證書，含作品名稱、圖檔、創作年代、創作媒材。</li>
      </ul>
    </div>
  </div>
  <div class="container mb-4">
    <h2>相關畫作</h2>
    <RelatedPaintings
      :paintings="paintingsByCategory"
      @add-to-collection="addToCollection"
      @get-painting="getPainting"
    />
  </div>
</template>

<script>
import RelatedPaintings from '@/components/RelatedPaintings.vue';
import emitter from '@/utilities/emitter';

export default {
  data() {
    return {
      isLoading: false,
      id: '',
      painting: {},
      state: { paintingLoading: '' },
      paintings: [],
    };
  },
  components: { RelatedPaintings },
  methods: {
    getPainting(id) {
      if (id !== undefined) {
        this.id = id;
      }
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
    getAllPaintings() {
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
  computed: {
    paintingsByCategory() {
      const { id, category } = this.painting;

      function filterByCategory(painting) {
        return painting.id !== id && painting.category === category;
      }
      return this.paintings.filter(filterByCategory);
    },
  },
  mounted() {
    this.id = this.$route.params.paintingId;
    this.getPainting();
    this.getAllPaintings();
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-item {
  list-style: none;
  a {
    text-decoration: none;
  }
}
.painting-frame {
  @include painting-frame(200px, 80%, 8vh, 6vw);
}
h2 {
  color: $kimberly-dark;
  font-size: 1.75rem;
  border-bottom: 1px solid $martinique;
  padding-bottom: 5px;
  margin-bottom: 1rem;
}
h3 {
  color: $french-lilac-dark1;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  span {
    color: $kimberly-dark;
  }
}
ul {
  border-left: 1px solid $kimberly-light;
  margin-left: 1.75rem;
}
p,
li {
  color: $martinique-light2;
  font-size: 1.25rem;
  list-style-image: url('../assets/images/favicon-16x16.png');
}

.collection-notice {
  color: white;
  h2 {
    color: $white;
    border-bottom: 1px solid $french-lilac;
  }
  li {
    color: $white;
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
