var path = require('path');
var webpack = require('webpack');
var ExternalsPlugin = webpack.ExternalsPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
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
        test: /\.(scss|css)$/,
        use: [ 'style-loader', 'css-loader' ]
      }, {
        test: /\.(jpg|png)$/,
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