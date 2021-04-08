const addPlugins = require('./src/utils/plugins')
const addFilters = require('./src/utils/filters')
const addTransforms = require('./src/utils/transforms')
const addCollections = require('./src/utils/collections')
const markdown = require('./src/utils/markdown')

module.exports = config => {
  addPlugins(config)
  addFilters(config)
  addTransforms(config)
  addCollections(config)

  config.setDataDeepMerge(true)
  config.setLibrary('md', markdown)
  config.setTemplateFormats('md,njk')
  
  config.addPassthroughCopy('assets')
  config.addPassthroughCopy({ 'assets/logo' : '/' })
  if (!process.env.ELEVENTY_ENV)
    config.addPassthroughCopy({ 'src/js': '/' })

  config.setBrowserSyncConfig({
    ui: false,
    ghostMode: false
  })
  
  return {
    dir: {
      includes: "src/layouts",
      data: "src/data"
    }
  }
}
