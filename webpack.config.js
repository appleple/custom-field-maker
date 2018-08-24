var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './test/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }, {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
}