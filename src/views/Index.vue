<template>
  <div class="container-fluid p-0">
    <Navbar></Navbar>
    <ToastMessage></ToastMessage>
    <div class="wrapper">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ToastMessage from '@/components/ToastMessage.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import emitter from '@/utilities/mitt';

export default {
  provide() {
    return {
      emitter,
    };
  },
  components: {
    Navbar,
    Footer,
    ToastMessage,
  },
};
</script>

<style lang="scss">
.wrapper {
  min-height: calc(100vh - 156.668px);
}
@include media-breakpoint-up(md) {
  .wrapper {
    min-height: calc(100vh - 138.578px);
  }
}
@include media-breakpoint-up(lg) {
  .wrapper {
    min-height: calc(100vh - 90px);
  }
}
</style>
