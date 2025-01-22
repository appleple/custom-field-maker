const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prodConfig = require('./webpack.prod.js');

module.exports = merge(prodConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: {
      overlay: false,
    },
    static: {
      directory: path.resolve(__dirname, ''),
    },
    open: false,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html',
    }),
  ],
  watchOptions: {
    ignored: '**/node_modules/**',
    aggregateTimeout: 300,
    poll: 1000,
  },
});
