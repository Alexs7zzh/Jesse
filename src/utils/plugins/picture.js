const Image = require('@11ty/eleventy-img')
const { basename } = require('path')

const defaultOptions = {
  widths: [768, 1024, 1280, 1680],
  sizes: '',
  formats: ['webp', 'jpeg'],
  urlPath: '/assets/',
  outputDir: './.cache/'
}

module.exports = async (document, options) => {
  options = Object.assign({}, defaultOptions, options)
  
  if (options.sizes.length === 0) throw new Error('"sizes" for the picture plugin is not defined.')
  
  const images = [...document.querySelectorAll('figure img')]

  for (let [index, i] of images.entries()) {
    const src = '.' + i.getAttribute('src')
    
    const meta = await Image(src, options)

    const last = meta.jpeg[meta.jpeg.length - 1]
    i.setAttribute('width', last.width)
    i.setAttribute('height', last.height)
    i.setAttribute('src', last.url)

    if (index !== 0) {
      i.setAttribute('loading', 'lazy')
      i.setAttribute('decoding', 'async')
    } else if (document.querySelector('link[as="image"][rel="preload"]') !== null) {
      const og = document.querySelector('meta[property="og:image"]')
      const preload = document.querySelector('link[as="image"][rel="preload"]')
      
      if (basename(src) !== basename(og.getAttribute('content')))
        throw new Error(`Picture plugin error when transforming ${src}`)
      
      let url = ''
      for (let j = meta.jpeg.length - 1; j >=0; j--)
        if (meta.jpeg[j].width <= 1024) {
          url = 'https://jesor.me' + meta.jpeg[j].url
          break
        }
      og.setAttribute('content', url)
      preload.setAttribute('imagesrcset', meta.webp.map(p => p.srcset).join(', '))
      preload.setAttribute('href', url.replace('https://jesor.me', ''))
    }
    
    i.outerHTML = `
    <picture>
      <source type="image/webp" sizes="${options.sizes}" srcset="${meta.webp.map(p => p.srcset).join(', ')}">
      <source type="image/jpeg" sizes="${options.sizes}" srcset="${meta.jpeg.map(p => p.srcset).join(', ')}">
      ${i.outerHTML}
    </picture>`
  }

}