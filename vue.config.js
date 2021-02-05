const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  chainWebpack: (config) => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
    },
  },

  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'sprite.svg'
      },
      pluginOptions: {
        plainSprite: true
      }
    },
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/sass/help-styles.sass"`
      },
    },
  },

  filenameHashing: true
};
