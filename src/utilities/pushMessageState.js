import emitter from '@/utilities/emitter';

export default function (response, title = '更新', painting = '') {
  if (response.data.success) {
    emitter.emit('push-message', {
      style: 'primary',
      title: `${painting}${title}成功`,
    });
  } else {
    const message = typeof response.data?.message === 'string' ? [response.data.message] : response.data.message;
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
