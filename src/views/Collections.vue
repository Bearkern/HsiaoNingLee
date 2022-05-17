<template>
  <Loading :active="isLoading" :z-index="1060" />
  <div class="container pt-6 pt-lg-7 mb-4">
    <h3>收藏畫作須知</h3>
    <ul>
      <li>填寫收藏者資料僅做為建檔，通知藝術家畫展資訊使用。</li>
      <li>
        有意收藏畫作者，請直接私訊李曉寧藝術家
        <a
          href="https://www.facebook.com/leehsiaolin"
          class="mb-3 me-2 mb-md-0 text-primary text-decoration-none lh-1"
          target="_blank"
        >
          <i class="bi bi-facebook fs-3"></i>
        </a>
        或致電 0935-509498
      </li>
    </ul>
  </div>

  <div v-if="!collections.carts.length" class="container empty-collection mb-4">
    <p class="d-inline-block">您目前沒有收藏任何畫作</p>
    <RouterLink class="btn btn-primary text-white" to="/paintings">前往收藏</RouterLink>
    <div class="bougainvillea mt-4"></div>
  </div>

  <div v-else class="collect-group container row mx-auto">
    <div class="collected-paintings col-lg-8 mb-4">
      <h3>已收藏畫作</h3>
      <table class="table align-middle table-primary">
        <thead>
          <tr>
            <th>
              <button type="button" class="btn btn-outline-danger" @click="removeCollections">
                <i class="bi bi-folder-x"></i>
              </button>
            </th>
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
          <tr v-for="collection in collections.carts" :key="collection.id">
            <td>
              <button
                type="button"
                class="btn btn-outline-danger"
                :disabled="state.paintingLoading === collection.id"
                @click="removeCollection(collection.id, collection.product.title)"
              >
                <span
                  class="spinner-border spinner-grow-sm"
                  v-if="state.paintingLoading === collection.id"
                ></span>
                <i class="bi bi-folder-minus" v-if="state.paintingLoading !== collection.id"></i>
              </button>
            </td>
            <td>
              <span class="badge bg-primary">{{ collection.product.category }}</span>
              <h4 class="mt-2">{{ collection.product.title }}</h4>
              <span class="mobile-only">{{ collection.product.size }}</span>
            </td>
            <td>
              <div
                class="painting-image"
                :style="{ backgroundImage: `url(${collection.product.imageUrl})` }"
              ></div>
            </td>
            <td class="table-responsive">{{ collection.product.year }}</td>
            <td class="table-responsive">{{ collection.product.size }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-lg-4 mb-4">
      <div class="collector-info">
        <h3>收藏者資訊</h3>
        <Form ref="collectionForm" class="row mb-4" v-slot="{ errors }" @submit="sendCollections">
          <div class="col-12 col-md-4 col-lg-12 mb-2">
            <label for="name" class="form-label">姓名<span class="text-danger">*</span></label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              v-model="form.user.name"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
            />
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>

          <div class="col-12 col-md-8 col-lg-12 mb-2">
            <label for="email" class="form-label">Email<span class="text-danger">*</span></label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              v-model="form.user.email"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
            />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>

          <div class="col-12 col-md-4 col-lg-12 mb-2">
            <label for="tel" class="form-label">電話<span class="text-danger">*</span></label>
            <Field
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              v-model="form.user.tel"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
            />
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>

          <div class="col-12 col-md-8 col-lg-12 mb-2">
            <label for="address" class="form-label">地址<span class="text-danger">*</span></label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              v-model="form.user.address"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
            />
            <ErrorMessage name="地址" class="invalid-feedback" />
          </div>

          <div class="mb-2">
            <label for="message" class="form-label">備註</label>
            <Field
              name="message"
              id="message"
              class="form-control"
              v-model="form.message"
              cols="30"
              rows="3"
              as="textarea"
            />
          </div>
          <div class="text-end">
            <button
              type="submit"
              class="btn btn-primary text-white"
              :disabled="!collections.carts.length"
            >
              填寫完成
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utilities/emitter';

export default {
  data() {
    return {
      isLoading: false,
      paintings: [],
      painting: {},
      collections: {
        carts: [],
      },
      state: {
        paintingLoading: '',
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    getCollections() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.collections = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '錯誤訊息');
        });
    },
    removeCollection(id, title) {
      this.state.paintingLoading = id;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          this.state.paintingLoading = '';
          this.getCollections();
          emitter.emit('get-collection');
          this.$httpMessageState(res, '移除', title);
        })
        .catch((err) => {
          this.state.paintingLoading = '';
          this.$httpMessageState(err.response, '移除', title);
        });
    },
    removeCollections() {
      this.isLoading = true;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          this.getCollections();
          this.isLoading = false;
          emitter.emit('get-collection');
          this.$httpMessageState(res, '清空收藏');
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '清空收藏');
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    sendCollections() {
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, {
          data: this.form,
        })
        .then((res) => {
          this.$refs.collectionForm.resetForm();
          emitter.emit('get-collection');
          this.$router.push(`/checkCollections/${res.data.orderId}`);
          this.isLoading = false;
          this.$httpMessageState(res, '送出資料');
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '送出資料');
        });
    },
  },
  mounted() {
    this.getCollections();
  },
};
</script>

<style lang="scss" scoped>
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
ul {
  border-left: 1px solid $kimberly-light;
  margin-left: 1.75rem;
}
p,
li {
  color: $martinique-light2;
  font-size: 1.25rem;
  list-style-image: url('../assets/images/favicon-16x16.png');
}
.empty-collection {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  p {
    color: $french-lilac-dark1;
  }
  .btn-primary {
    min-width: 100%;
  }
}
.bougainvillea {
  width: 100%;
  height: 35vh;
  background-image: url('../assets/images/bougainvillea.jpg');
  background-size: cover;
  background-position: center center;
}

.collect-group {
  padding: 0;
}
.collected-paintings {
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
.collector-info {
  .form-label {
    color: $primary;
  }
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
  .empty-collection {
    justify-content: center;
    p {
      font-size: 1.5rem;
      margin: 0 20px 0 0;
    }
    .btn-primary {
      min-width: 10%;
    }
  }
}
@include media-breakpoint-up(lg) {
  .bougainvillea {
    height: 50vh;
  }
}
</style>
