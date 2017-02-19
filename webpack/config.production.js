const merge = require('webpack-merge');
const common = require('./config.common');

module.exports = merge(common, {
  output: {
    filename: 'bundle.js',
  },
});
