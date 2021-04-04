/* global process */
module.exports = config => {
  
  if (process.env.ELEVENTY_ENV)
    config.addTransform('transform', (content, outputPath) => {
      if (outputPath && outputPath.endsWith('.html')) {
        const { parseHTML } = require('linkedom')
        let { document } = parseHTML(content)
        
        require('./plugins/picture')(document, {
          sizes: '(max-width: 850px) 100vw, 820px',
          sharpWebpOptions: { quality: 55 },
          sharpJpegOptions: { quality: 50 }
        })
  
        return `<!DOCTYPE html>${document.documentElement.outerHTML}`
      }
      return content
    })
  
  
  if (process.env.ELEVENTY_ENV) {
    const minify = require('html-minifier').minify
    config.addTransform('minifyHtml', (content, outputPath) => {
      if (outputPath && outputPath.endsWith('.html')) 
        content = minify(content, {
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeComments: true,
          sortClassName: true,
          sortAttributes: true,
          html5: true,
          decodeEntities: true,
          minifyJS: true
        })
      
      return content
    })
  }
}
