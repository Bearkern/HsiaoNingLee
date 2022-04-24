<template>
  <div class="container pt-5 pt-lg-7">
    <Loading :active="isLoading" :z-index="1060" />
    <div class="row justify-content-center mb-4">
      <div class="col-lg-6 hydrangea mb-4"></div>
      <Form class="col-lg-6" v-slot="{ errors }" @submit="login">
        <div class="mb-2">
          <label for="email" class="form-label text-primary">帳號</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="user.username"
          />
          <ErrorMessage name="email" class="invalid-feedback" />
        </div>

        <div class="mb-2">
          <label for="password" class="form-label text-primary">密碼</label>
          <Field
            id="password"
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors['password'] }"
            placeholder="請輸入密碼"
            rules="required"
            v-model="user.password"
          />
          <ErrorMessage name="password" class="invalid-feedback" />
        </div>

        <div class="text-end">
          <button type="submit" class="btn btn-primary text-white">登入</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;

          this.$router.push('/admin');
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.$httpMessageState(err.response, '登入');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.hydrangea {
  height: 200px;
  background-image: url('../assets/images/hydrangea.jpg');
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    height: 400px;
  }
}
</style>
