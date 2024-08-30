const path = require('path');
const { merge } = require('webpack-merge');
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
    static: [
      {
        directory: path.resolve(__dirname, ''),
      },
    ],
    open: true,
    hot: true,
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
  ],
});
