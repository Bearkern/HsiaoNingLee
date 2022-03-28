<template>
  <nav class="index-navbar navbar navbar-expand-lg navbar-dark position-fixed bg-dark w-100">
    <div class="container-fluid">
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
        class="collapse navbar-collapse justify-content-between"
        id="navbarNav"
        ref="collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/paintings" @click="closeNavHam"
              >水彩創作</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin" @click="closeNavHam"
              ><i class="bi bi-person-circle fs-3 pe-3"></i>登入</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/collections" @click="closeNavHam"
              ><i class="bi bi-collection-fill fs-3 pe-3"></i>畫作收藏</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import collapseMixin from '@/mixins/collapseMixin';

export default {
  mixins: [collapseMixin],
};
</script>

<style lang="scss" scoped>
  .index-navbar {
    z-index: 10;
  }
</style>
