module.exports = config => {
  config.addPlugin(require('./plugins/sass'))
  config.addPlugin(require('./plugins/rollup'))
}
