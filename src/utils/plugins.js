module.exports = config => {
  config.addPlugin(require('./plugins/sass'))
  config.addPlugin(require('./plugins/rollup'))
  config.addPlugin(require('@11ty/eleventy-plugin-rss'))
}
