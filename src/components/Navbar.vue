<template>
  <nav class="index-navbar navbar navbar-expand-lg navbar-dark position-fixed">
    <div class="container">
      <router-link class="navbar-brand" to="/">李曉寧水彩畫家</router-link>
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
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarNav"
        ref="collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/paintings">水彩創作</router-link>
          </li>
        </ul>
        <ul class="navbar-nav nav-functions d-inline-block">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin"
              ><i class="bi bi-person-circle fs-3 px-3"></i>登入</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/collections"
              ><i class="bi bi-collection-fill fs-3 me-3"></i>畫作收藏</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse';

export default {
  methods: {
    closeNavHam() {
      this.collapse.hide();
    },
    toggleNavHam() {
      this.collapse.toggle();
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },
};
</script>

<style lang="scss" scoped>
.index-navbar {
  width: 100%;
  z-index: 10;
  background-color: $martinique;
}
.nav-functions li {
  display: inline-block;
}
</style>
