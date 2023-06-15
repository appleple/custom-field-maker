const path = require('path');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

process.env.BABEL_ENV = 'development';

module.exports = webpackMerge.merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    modules: ['packages', 'node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    open: true,
    hot: false,
    port: 3000,
  }
});
