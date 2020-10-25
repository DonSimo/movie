const path=require("path");

const isNotProduction = process.env.NODE_ENV !== 'production';

module.exports = {
  outputDir: path.resolve(__dirname, "../backend/templates/"),
  assetsDir: isNotProduction ? "": "../static/",
  devServer      : {
    port  : 3000,
    proxy : {
      '/api' : {
        target       : 'http://localhost:5000/',
        changeOrigin : true,
        logLevel     : 'info'
      }
    }
    },
    configureWebpack : {
      devtool      : isNotProduction ? 'cheap-module-eval-source-map' : '',
      optimization : {
        minimize     : !isNotProduction,
        moduleIds    : 'hashed',
        runtimeChunk : !isNotProduction
      }
    },
    css        : {
      sourceMap : isNotProduction
    },
    chainWebpack : config => {
      config.module
        .rule('vue')
        .use('vue-svg-inline-loader')
        .loader('vue-svg-inline-loader')
        .options({ /* ... */ });
    },
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ]
}