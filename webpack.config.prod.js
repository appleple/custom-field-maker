const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './example/index.js',
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
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      }, {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  ],
}