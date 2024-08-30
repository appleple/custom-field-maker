const path = require('path');
const { merge } = require('webpack-merge');
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
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(prodConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
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
