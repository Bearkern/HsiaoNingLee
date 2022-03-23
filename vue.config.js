module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/HsiaoNingLee/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: '李曉寧水彩畫家',
    },
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon-32x32.png',
      favicon16: 'favicon-16x16.png',
      appTouchIcon: 'apple-touch-icon.png',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
  },
};
