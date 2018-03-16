'use strict';

const merge = require('webpack-merge');//在大型项目中，可能 webpack.config.js 会变得越来越臃肿，这个时候可以利用做 webpack-merge 插件。将配置定义在一个目录下面的不同文件中，然后通过 webpack-merge 来合并成最终的配置。
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'   // this overrides the NODE_ENV value of prod.env
});
