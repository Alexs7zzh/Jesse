const uslug = require('uslug')

/* global process */
module.exports = config => {
  config.addTransform('transform', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const { parseHTML } = require('linkedom')
      let { document } = parseHTML(content)
      
      if (process.env.ELEVENTY_ENV)
        require('./plugins/picture')(document, {
          sizes: '(max-width: 850px) 100vw, 820px',
          sharpWebpOptions: { quality: 55 },
          sharpJpegOptions: { quality: 50 }
        })
      
      const toc = document.querySelector('.toc')
      if (toc) {
        let headings = [...document.querySelectorAll('article h2, article h3')]
        if (headings.length > 0) {
          headings = headings.map(i => [i.tagName, i.innerText])
          const html = `
          <ol>
            ${headings.map(i => `<li class="${i[0] === 'H2' ? 'h2' : 'h3'}"><a href="#${uslug(i[1])}">${i[1]}</a></li>`).join('')}
          </ol>
          `
          toc.innerHTML = html
          document.body.classList.add('has-toc')
        } else toc.remove()
      }

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
