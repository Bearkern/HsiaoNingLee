<template>
  <Loading :active="isLoading" :z-index="1060" />
  <div class="collect-group container row pt-6 pt-lg-7 mb-4 mx-auto">
    <h2>確認收藏者資訊</h2>

    <div class="collected-paintings col-lg-8 mb-4">
      <h3>已收藏畫作</h3>
      <table class="table align-middle table-primary">
        <thead>
          <tr>
            <th>
              畫作
              <span class="d-sm-none">資訊</span>
              <span class="d-none d-sm-inline-block">名稱</span>
            </th>
            <th>畫作</th>
            <th class="table-responsive">年份</th>
            <th class="table-responsive">尺寸</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="painting in collections.products" :key="painting">
            <td>
              <span class="badge bg-primary">{{ painting.product.category }}</span>
              <h4 class="mt-2">{{ painting.product.title }}</h4>
              <span class="mobile-only">{{ painting.product.size }}</span>
            </td>
            <td>
              <div
                class="painting-image"
                :style="{ backgroundImage: `url(${painting.product.imageUrl})` }"
              ></div>
            </td>
            <td class="table-responsive">{{ painting.product.year }}</td>
            <td class="table-responsive">{{ painting.product.size }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-lg-4 mb-4">
      <h3>已填寫資訊</h3>
      <table class="table align-middle">
        <tbody>
          <tr>
            <th>姓名</th>
            <td>{{ collections.user.name }}</td>
          </tr>
          <tr>
            <th width="140">Email</th>
            <td>{{ collections.user.email }}</td>
          </tr>
          <tr>
            <th>電話</th>
            <td>{{ collections.user.tel }}</td>
          </tr>
          <tr>
            <th>地址</th>
            <td>{{ collections.user.address }}</td>
          </tr>
          <tr>
            <th class="align-top">備註</th>
            <td>{{ collections.message }}</td>
          </tr>
        </tbody>
      </table>
      <div class="text-end">
        <button type="button" class="btn btn-primary text-white" @click="checkCollections">
          確認資料正確
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      collectionId: '',
      collections: {
        user: {},
      },
      products: [],
      quantity: 0,
    };
  },
  methods: {
    getCollections() {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.collectionId}`,
        )
        .then((res) => {
          this.collections = res.data.order;
          this.products = Object.values(res.data.order.products);
          this.quantity = this.products.reduce((acc, cur) => acc + cur.qty, 0);
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },
    checkCollections() {
      this.isLoading = true;
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.collections.id}`,
        )
        .then((res) => {
          this.isLoading = false;
          this.$router.push('/finishCollection');
          this.$httpMessageState(res, '建檔');
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '建檔');
        });
    },
  },
  mounted() {
    this.collectionId = this.$route.params.collectionId;
    this.getCollections();
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: $kimberly-dark;
  font-size: 1.75rem;
  margin-bottom: 20px;
}
h3 {
  color: $french-lilac-dark2;
  font-size: 1.5rem;
  border-bottom: 1px solid $french-lilac-dark1;
  padding-bottom: 0.5rem;
}
h4 {
  color: $french-lilac-dark2;
  font-size: 1rem;
}
.collect-group {
  padding: 0;
  .btn {
    border: none;
  }
  .table > :not(:first-child) {
    border-top: 2px solid $kimberly-light;
  }
  th {
    color: $kimberly-dark;
    line-height: 2.25rem;
  }
  td {
    color: $kimberly;
  }
  .table-responsive {
    display: none;
  }
}
.painting-image {
  background-size: cover;
  background-position: center center;
  width: 150px;
  height: 100px;
}
@include media-breakpoint-up(sm) {
  .collected-paintings {
    .mobile-only {
      display: none;
    }
    .table-responsive {
      display: table-cell;
    }
  }
}
</style>
