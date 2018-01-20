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
    // preLoaders: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules/,
    //     loader: 'eslint-loader'
    //   }
    // ],
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
        use: 'css-loader'
      }, {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
}