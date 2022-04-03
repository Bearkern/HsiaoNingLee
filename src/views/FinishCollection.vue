<template>
  <div class="container pt-6 pt-lg-7">
    <div class="hydrangea mb-4"></div>
    <h2>已完成建檔</h2>
    <p>如有畫展訊息會再寄 email 通知，非常感謝您欣賞藝術家的創作。</p>
    <router-link to="/paintings" class="go-painting btn btn-primary text-white"
      >前往畫作
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.hydrangea {
  height: 35vh;
  background-image: url('../assets/images/hydrangea2.jpg');
  background-size: cover;
  background-position: center center;
}
h2 {
  color: $kimberly-dark;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}
p {
  color: $martinique-light2;
  font-size: 1.25rem;
}
.go-painting {
  min-width: 100%;
  margin-bottom: 1.5rem;
}
@include media-breakpoint-up(sm) {
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }

  .go-painting {
    min-width: 10%;
  }
}
@include media-breakpoint-up(lg) {
  .hydrangea {
    height: 60vh;
  }
}
</style>
