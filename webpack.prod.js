const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    assetModuleFilename: 'assets/[name][ext]',
    publicPath: '/',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 30000,
      maxSize: 244000,
      cacheGroups: {
        // Reactとその関連パッケージ
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|prop-types|scheduler)[\\/]/,
          name: 'react-bundle',
          chunks: 'all',
          priority: 40,
          enforce: true,
        },
        // 主要なライブラリをまとめる
        mainVendors: {
          test: /[\\/]node_modules[\\/](html-entities|core-js|@babel|highlight.js|js-beautify)[\\/]/,
          name: 'main-vendors',
          chunks: 'all',
          priority: 30,
          enforce: true,
        },
        // その他のnode_modules
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
        // コンポーネント
        components: {
          test: /[\\/]components[\\/]/,
          name: 'components',
          chunks: 'async',
          minChunks: 1,
          priority: 10,
          reuseExistingChunk: true,
        },
        // デフォルト
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
    minimize: true,
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
          options: {
            cacheDirectory: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                  targets: {
                    browsers: ['last 2 chrome versions', 'last 2 firefox versions', 'last 2 safari versions'],
                  },
                },
              ],
              '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import'],
          },
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
    new BundleAnalyzerPlugin(),
  ],
};
