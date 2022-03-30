<template>
  <div class="container-fluid bg-dark">
    <footer class="row row-cols-1 row-cols-lg-3 align-items-center py-4">
      <div class="col">
        <span class="text-white">&copy; 2022 Clara Cai</span>
      </div>

      <div class="col">
        <span class="text-white">個人作品網站，非商業用途 ｜ </span>
        <span class="text-white"
          >圖文授權：李曉寧老師<a
            href="https://www.facebook.com/leehsiaolin"
            class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
            target="_blank"
            ><i class="bi bi-facebook fs-3 ps-2"></i
          ></a>
        </span>
      </div>
      <ul class="nav">
        <li class="ms-3">
          <a class="text-white" href="https://github.com/Bearkern/HsiaoNingLee" target="_blank"
            ><i class="bi bi-github fs-3"></i
          ></a>
        </li>
        <li class="ms-3">
          <a class="text-white" href="mailto:haolin1224@gmail.com"
            ><i class="bi bi-envelope-fill fs-3"></i
          ></a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.col span {
  display: block;
}
@media (min-width: 576px) {
  .col span {
    display: inline;
  }
}
</style>
