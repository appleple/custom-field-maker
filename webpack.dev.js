const path = require('path');
const webpackMerge = require('webpack-merge');
const prod = require('./webpack.prod.js');

process.env.BABEL_ENV = 'development';

module.exports = webpackMerge.merge(prod, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    open: true,
    hot: false,
    port: 3000,
  }
});
