// webpack.prod.js
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  cache: {
    type: 'filesystem', // Webpack 5では推奨される方法
  },
  stats: {
    children: true,
  },
  entry: {
<<<<<<< HEAD
<<<<<<< HEAD
    index: './example/src/index.js',
=======
    index: './src/index.jsx',
>>>>>>> 51184c2 (build: eslint を導入)
=======
    index: './example/index.js',
>>>>>>> da80202 (pretteir の設定 & node のバージョンアップ)
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
<<<<<<< HEAD
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
=======
    clean: true, // ビルド時に dist フォルダをクリーンアップ
>>>>>>> 6a88af4 (依存関係の整理)
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
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
<<<<<<< HEAD
<<<<<<< HEAD
        type: 'asset',
=======
        use: {
          loader: 'url-loader',
        },
>>>>>>> da80202 (pretteir の設定 & node のバージョンアップ)
=======
        type: 'asset', // Webpack 5 の Asset Modules を使用
>>>>>>> 6a88af4 (依存関係の整理)
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      context: './src',
      extensions: ['js', 'ts', 'tsx', 'jsx'],
      exclude: ['/node_modules/'],
      emitError: true,
      emitWarning: true,
      failOnError: true,
      fix: true,
    }),
  ],
};
