const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');

const common = require('./config.common');

const development = {
  plugins: [
    new DashboardPlugin(),
  ],
};

module.exports = merge(common, process.env.npm_lifecycle_event === 'start' ? development : {});
