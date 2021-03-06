const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // ファイルが.vueで終われば...
        loader: "vue-loader", // vue-loaderを使う
      },
    ]
  },
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin()
  ],
};