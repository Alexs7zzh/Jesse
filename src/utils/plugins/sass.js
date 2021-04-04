const Mutex = require('async-mutex').Mutex
const md5 = require('md5')
const { basename, extname } = require('path')
const fs = require('fs-extra')
const fg = require('fast-glob')
const sass = require('sass')
const csso = require('csso')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

const compile = async () => {
  const files = await fg('src/scss/[!_]*.{scss,sass}')
  
  for (const entry of files) {
    const ext = extname(entry)
    const name = basename(entry, ext)
    
    const { css } = sass.renderSync({
      file: entry
    })
    
    try {
      fs.mkdirSync('_site/')
    }  catch (er) {
      'nothing'
    }
    fs.writeFile(`_site/${name}.css`, css) 
  }
}

const compileWatch = changed => {
  if (changed === undefined) return
  
  changed = changed.filter(i => i.endsWith('scss') || i.endsWith('sass'))
  
  if(changed.length > 0)
    compile()
}

const build = async () => {
  const files = await fg('src/scss/[!_]*.{scss,sass}')
  let result = {}
  
  for (const entry of files) {
    const ext = extname(entry)
    const name = basename(entry, ext)
    
    let { css } = sass.renderSync({
      file: entry
    })
    
    css = postcss([autoprefixer]).process(css).css
    
    css = csso.minify(css, {
      sourceMap: false,
      restructure: true,
      forceMediaMerge: true
    }).css
    
    const hash = md5(css).slice(0, 10)
    result[name + '.css'] = `${name}-${hash}.css`
    
    try {
      fs.mkdirSync('_site/')
    }  catch (er) {
      'nothing'
    }
    fs.writeFile(`_site/${name}-${hash}.css`, css) 
  }

  return result
}

module.exports = config => {
  const mutex = new Mutex()
  let cssHash = {}
  /* global process */
  if (!process.env.ELEVENTY_ENV) {
    config.addWatchTarget('./src/scss/')
    config.on('beforeBuild', compile)
    config.on('beforeWatch', compileWatch)
    config.addFilter('cssHash', url => url)
  } else
    config.addNunjucksAsyncFilter('cssHash', async (url, callback) => {
      const release = await mutex.acquire()
      try {
        if (Object.keys(cssHash).length === 0)
          cssHash = await build()
      } finally {
        release()
      }
      for(let i in cssHash)
        url = url.replace(i, cssHash[i])
      callback(null, url)
    })

}