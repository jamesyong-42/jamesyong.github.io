'use strict';

const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'     // this overrides the NODE_ENV value of dev.env
});
