const path = require('path');

module.exports = {
  mode: 'production',
  cache: true,
  stats: {
    children: true,
  },
  entry: {
    index: './example/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './bundle.js',
    chunkFilename: `./bundle.chunk.js?date=${new Date().getTime()}`,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.css'],
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
