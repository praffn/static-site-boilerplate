const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const context = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  context,

  entry: './index.js',
  output: {
    path: outputPath,
    filename: 'bundle.[hash].js',
  },

  module: {
    loaders: [
      /**
       * Loader for .js files
       * Uses babel with es-2015 preset (check .babelrc)
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      /**
       * Loader for sass files
       * Extracts the text instead of inlining it
       */
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'sass']),
      },
      /**
       * Loader for images.
       * When building it adds them to the assets/images directory
       */
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        loader: 'file?name=assets/images/[name].[hash].[ext]',
      },
      /**
       * Loader for html files
       * Looks for sources and loads them with the appropriate loader
       */
      {
        test: /\.html$/,
        loader: 'html',
      },
    ],
  },

  plugins: [
    new DashboardPlugin(),
    new ExtractTextPlugin('style.[hash].css'),
    new HtmlPlugin({
      template: './index.html',
    }),
  ],
};
