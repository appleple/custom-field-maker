const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  cache: {
    type: 'filesystem',
  },
  stats: {
    assets: true,
    children: true,
  },
  entry: {
    index: './example/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './bundle.js',
    chunkFilename: `./bundle.chunk.js?date=${new Date().getTime()}`,
    clean: true,
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
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: 'assets/[name].[hash][ext]',
        },
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'lib/assets'),
        },
      ],
    }),
  ],
};
