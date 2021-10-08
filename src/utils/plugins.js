module.exports = config => {
  config.addPlugin(require('./plugins/sass'))
  config.addPlugin(require('./plugins/rollup'))
  config.addPlugin(require('@11ty/eleventy-plugin-rss'))

  if (process.env.PRODUCTION)
    config.on('afterBuild', async () => {
      const copy = require('recursive-copy')
      await copy('.cache', '_site/assets')
    })
}
