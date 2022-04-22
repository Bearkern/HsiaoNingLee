<template>
  <div class="container-fluid p-0">
    <Navbar />
    <ToastMessage />
    <div class="wrapper">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script>
import ToastMessage from '@/components/ToastMessage.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import emitter from '@/utilities/emitter';

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
  @media (min-width: 768px) {
    min-height: calc(100vh - 138.578px);
  }
  @media (min-width: 992px) {
    min-height: calc(100vh - 90px);
  }
}
</style>
