<template>
  <div class="toast-container position-fixed pe-3 end-0" style="z-index: 1500">
    <div
      v-for="(msg, index) in messages"
      :key="index"
      class="toast show"
      :class="`toast${index}`"
      role="alert"
    >
      <div class="toast-header">
        <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button
          type="button"
          class="btn-close"
          @click="hideToast(index)"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  methods: {
    showToast() {
      setTimeout(() => {
        this.messages.shift();
      }, 6000);
    },
    hideToast(index) {
      this.messages.splice(index, 1);
    },
  },
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
      this.showToast();
    });
  },
};
</script>

<style lang="scss" scoped>
  .toast-container {
    top: 66px;
  }
</style>
