<template>
  <nav class="index-navbar navbar navbar-expand-lg navbar-dark position-fixed bg-dark w-100">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/" @click="closeNavHam">李曉寧水彩畫家</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavHam"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav" ref="collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/paintings" @click="closeNavHam">水彩創作</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item collection">
            <RouterLink class="nav-link" to="/collections" @click="closeNavHam">
              <i class="bi bi-collection-fill fs-3 pe-3 position-relative"
                ><em class="translate-middle badge rounded-pill bg-danger fs-6">{{
                  collectionData.carts.length
                }}</em>
              </i>
              <span>收藏</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import collapseMixin from '@/mixins/collapseMixin';
import emitter from '@/utilities/emitter';

export default {
  data() {
    return {
      collectionData: {
        carts: [],
      },
    };
  },
  mixins: [collapseMixin],
  methods: {
    getCollection() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.collectionData = res.data.data;
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.getCollection();
    emitter.on('get-collection', () => {
      this.getCollection();
    });
  },
};
</script>

<style lang="scss" scoped>
.index-navbar {
  z-index: 10;
}
.collection {
  em {
    position: absolute;
    top: 0;
    right: -20px;
  }
  span {
    display: none;
  }
}
@include media-breakpoint-up(md) {
  .collection {
    span {
      display: inline-block;
    }
  }
}
</style>
