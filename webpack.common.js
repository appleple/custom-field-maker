const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,
  stats: {
    children: true,
  },
  entry: {
    index: './example/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name].js',
    chunkFilename: `./[name].chunk.js?date=${new Date().getTime()}`,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ],
  }
};
