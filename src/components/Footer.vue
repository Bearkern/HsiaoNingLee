<template>
  <div class="container-fluid bg-info">
    <div class="container">
      <footer class="row align-items-center py-4">
        <div class="col-12 col-lg-3 mb-2 mb-lg-0 nav justify-content-center pe-0">
          <span class="text-white">&copy; 2022 Hsiao Ning Lee All rights reserved</span>
        </div>

        <div class="col-12 col-lg-6 nav justify-content-center align-items-center pe-0">
          <span class="text-white">個人作品網站，非商業用途 ｜ </span>
          <span class="text-white d-flex align-items-center"
            >圖文授權：李曉寧老師<a
              href="https://www.facebook.com/leehsiaolin"
              class="me-2 text-white text-decoration-none"
              target="_blank"
              ><i class="bi bi-facebook fs-3 ps-2"></i
            ></a>
          </span>
        </div>

        <ul class="col-12 col-lg-3 nav justify-content-end">
          <li class="ms-3">
            <a class="text-white" href="https://github.com/Bearkern/HsiaoNingLee" target="_blank">
              <i class="bi bi-github fs-3"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-white" href="mailto:haolin1224@gmail.com">
              <i class="bi bi-envelope-fill fs-3"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col span {
  display: block;
}
@include media-breakpoint-up(sm) {
  .col span {
    display: inline;
  }
}
</style>
