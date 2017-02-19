const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const context = path.resolve(__dirname, '..', 'src');
const outputPath = path.resolve(__dirname, '..', 'dist');

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
        loader: 'babel-loader',
      },
      /**
       * Loader for sass files
       * Extracts the text instead of inlining it
       */
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      /**
       * Loader for images.
       * When building it adds them to the assets/images directory
       */
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        loader: 'file-loader?name=images/image.[hash].[ext]',
      },
      /**
       * Loader for html files
       * Looks for sources and loads them with the appropriate loader
       */
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('style.[hash].css'),
    new HtmlPlugin({
      template: './index.html',
    }),
  ],
};
