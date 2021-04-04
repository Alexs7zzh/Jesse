const Image = require('@11ty/eleventy-img')
const { basename } = require('path')

const defaultOptions = {
  widths: [480, 640, 1280, 1920, null],
  sizes: '',
  formats: ['webp', 'jpeg'],
  urlPath: '/assets/',
  outputDir: './_site/assets/'
}

module.exports = (document, options) => {
  options = Object.assign({}, defaultOptions, options)
  
  if (options.sizes.length === 0) throw new Error('"sizes" for the picture plugin is not defined.')
  
  const images = [...document.querySelectorAll('figure img')]
  
  images.forEach((i, index) => {
    const src = '.' + i.getAttribute('src')
    
    Image(src, options)
    const meta = Image.statsSync(src, options)
    
    const last = meta.jpeg[meta.jpeg.length - 1]
    i.setAttribute('width', last.width)
    i.setAttribute('height', last.height)
    if (index !== 0) {
      i.setAttribute('loading', 'lazy')
      i.setAttribute('decoding', 'async')
    } else if (document.querySelector('meta[property="og:image"]') !== null) {
      const og = document.querySelector('meta[property="og:image"]')
      const tw = document.querySelector('meta[property="twitter:image"]')
      if (basename(src) !== basename(og.getAttribute('content')))
        throw new Error(`Picture plugin error when transforming ${src}`)
      const url = 'https://jesor.me' + meta.jpeg[meta.jpeg.length - 3].url
      og.setAttribute('content', url)
      tw.setAttribute('content', url)
    }
    
    i.outerHTML = `
    <picture>
      <source type="image/webp" sizes="${options.sizes}" srcset="${meta.webp.map(p => p.srcset).join(', ')}">
      <source type="image/jpeg" sizes="${options.sizes}" srcset="${meta.jpeg.map(p => p.srcset).join(', ')}">
      ${i.outerHTML}
    </picture>`
  })

}