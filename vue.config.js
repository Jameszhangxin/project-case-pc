const autoprefixer = require('autoprefixer');
const port = process.env.port || process.env.npm_config_port || 8836

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [autoprefixer()]
      },
      sass: {
          sourceMap: true
      }
    }
  },
  devServer: {
    port: port,
    open: false,
    disableHostCheck: true,
    compress: true,
    hot: true,
    // proxy: {
    //   '/mf': {
    //     target: 'https://monitorf.shwawo.com/',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  },
};