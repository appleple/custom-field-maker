const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  cache: true,
  stats: {
    children: true,
  },
  entry: {
<<<<<<< HEAD
    index: './example/src/index.js',
=======
    index: './src/index.jsx',
>>>>>>> 51184c2 (build: eslint を導入)
  },
  output: {
<<<<<<< HEAD
    path: path.join(__dirname, 'dist'),
    filename: './bundle.js',
    chunkFilename: `./bundle.chunk.js?date=${new Date().getTime()}`,
    clean: true,
=======
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: `bundle.chunk.js?date=${new Date().getTime()}`,
    publicPath: '/',
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
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
        type: 'asset',
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      cache: false,
      context: './src',
      extensions: ['js', 'ts', 'tsx', 'jsx'],
      exclude: ['/node_modules/'],
      emitError: true,
      emitWarning: true,
      failOnError: true,
      fix: true
    }),
  ]
};
