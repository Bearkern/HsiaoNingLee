<template>
  <DashboardNavbar />
  <div class="container-fluid pt-6">
    <ToastMessage />
    <RouterView v-if="loginStatus" />
  </div>
</template>

<script>
import DashboardNavbar from '@/components/DashboardNavbar.vue';
import emitter from '@/utilities/emitter';
import ToastMessage from '@/components/ToastMessage.vue';

export default {
  data() {
    return {
      loginStatus: false,
    };
  },
  components: {
    DashboardNavbar,
    ToastMessage,
  },
  provide() {
    return {
      emitter,
    };
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.$http
      .post(`${process.env.VUE_APP_API}/api/user/check`)
      .then((res) => {
        this.loginStatus = res.data.success;
        this.$httpMessageState(res, '登入');
      })
      .catch((err) => {
        this.$httpMessageState(err.response);
        this.$router.push('/login');
      });
  },
};
</script>
