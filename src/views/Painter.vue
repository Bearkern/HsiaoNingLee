<template>
  <div class="container banner pt-5 px-4 d-flex align-items-center justify-content-between">
    <div class="description">
      <p>
        畫筆下的「花」脫俗，篩去嬌媚，自展輕柔<br />
        畫筆下的「景」善美，引光入境，自說故事<br />
        畫筆下的「物」律動，流轉心情，自顯生命
      </p>
    </div>
    <img class="painter" src="../assets/images/LeeHsiaoNing.jpeg" alt="Lee Hsiao Ning" />
  </div>
  <div class="container intro">
    <ul>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url('../assets/images/hydrangea.jpg');
  background-size: cover;
  background-position: center 70%;
  height: calc(100vh);
}
.banner {
  position: relative;
}
.painter {
  position: absolute;
  border: 3px solid $white;
  bottom: 70px;
  right: 70px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.description {
  background: rgba(0, 0, 0, 0.35);
  padding: 50px;
  color: $white;
  writing-mode: vertical-lr;
  letter-spacing: 5px;
  p {
    font-size: 24px;
  }
}
@media (max-width: 768px) {
  .painter {
    bottom: 30px;
    right: 30px;
    width: 150px;
    height: 150px;
  }
}
</style>
