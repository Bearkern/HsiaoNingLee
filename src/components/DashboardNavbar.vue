<template>
  <nav class="index-navbar navbar navbar-expand-lg navbar-dark position-fixed bg-info w-100">
    <div class="container-fluid">
      <ToastMessage></ToastMessage>
      <RouterLink class="navbar-brand" to="/admin" @click="closeNavHam">畫作管理</RouterLink>
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
            <RouterLink class="nav-link" to="/admin/collections" @click="closeNavHam"
              >收藏者資料管理</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/coupons" @click="closeNavHam">優惠券</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin/posts" @click="closeNavHam">貼文</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">回前台</RouterLink>
          </li>
        </ul>
        <button type="button" class="btn btn-primary text-white" @click="logout">登出</button>
      </div>
    </div>
  </nav>
</template>

<script>
import ToastMessage from '@/components/ToastMessage.vue';
import collapseMixin from '@/mixins/collapseMixin';

export default {
  mixins: [collapseMixin],
  components: {
    ToastMessage,
  },
  methods: {
    logout() {
      this.$http
        .post(`${process.env.VUE_APP_API}/logout`)
        .then(() => {
          this.$router.push('/login');
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '登出');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.index-navbar {
  z-index: 10;
}
</style>
