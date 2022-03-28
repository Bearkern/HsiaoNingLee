<template>
  <div class="container-fluid p-0 min-vh-100">
    <Navbar></Navbar>
    <ToastMessage></ToastMessage>
    <router-view />
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
