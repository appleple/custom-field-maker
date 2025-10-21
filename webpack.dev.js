import path from 'path';
import { fileURLToPath } from 'url';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import prodConfig from './webpack.prod.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(prodConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    client: {
      overlay: false,
    },
    static: {
      directory: path.resolve(__dirname, ''),
      serveIndex: false,
    },
    open: false,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html',
    }),
  ],
  watchOptions: {
    ignored: '**/node_modules/**',
    aggregateTimeout: 300,
    poll: 1000,
  },
});
