// webpack.dev.js
const path = require('path');
const { merge } = require('webpack-merge');
<<<<<<< HEAD
<<<<<<< HEAD
const prod = require('./webpack.prod.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.BABEL_ENV = 'development';

module.exports = merge(prod, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: {
      overlay: false,
    },
=======
const webpack = require('webpack');
const prodConfig = require('./webpack.prod.js');
=======
>>>>>>> 6a88af4 (依存関係の整理)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prodConfig = require('./webpack.prod.js');

module.exports = merge(prodConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
=======
    client: {
      overlay: false,
    },
>>>>>>> e1dfc72 (Highlighter コンポーネントが children の変更を検知して再レンダリングされない問題の修正)
    static: [
      {
        directory: path.resolve(__dirname, ''),
      },
    ],
=======
    static: {
      directory: path.resolve(__dirname, ''),
    },
>>>>>>> 6a88af4 (依存関係の整理)
    open: false,
    hot: true,
<<<<<<< HEAD
<<<<<<< HEAD
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html',
    }),
<<<<<<< HEAD
    // new ESLintPlugin({
    //   extensions: ['js', 'jsx'],
    //   overrideConfig: {
    //     plugins: ['react-hooks'],
    //     rules: {
    //       'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    //       'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    //     },
    //   },
    // })
=======
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(
      {
        template: './example/index.html',
        filename: 'index.html'
      }
<<<<<<< HEAD
    )
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
=======
>>>>>>> 6a88af4 (依存関係の整理)
  ],
=======
    ),
=======
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html',
    }),
>>>>>>> e1dfc72 (Highlighter コンポーネントが children の変更を検知して再レンダリングされない問題の修正)
    // new ESLintPlugin({
    //   extensions: ['js', 'jsx'],
    //   overrideConfig: {
    //     plugins: ['react-hooks'],
    //     rules: {
    //       'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    //       'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    //     },
    //   },
    // })
<<<<<<< HEAD
  ]
>>>>>>> 5763b9c (global state 持ち方を修正)
=======
  ],
>>>>>>> e1dfc72 (Highlighter コンポーネントが children の変更を検知して再レンダリングされない問題の修正)
});
