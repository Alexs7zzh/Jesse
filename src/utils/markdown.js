const uslug = require('uslug')

module.exports = require('markdown-it')({
  html: true,
  typographer: true
})
  .use(require('./markdown/emphasis'))
  .use(require('./markdown/figure'))
  .use(require('./markdown/list'))
  .use(require('markdown-it-anchor'), {
    slugify: s => uslug(s)
  })
  .use(require('markdown-it-link-attributes'), {
    pattern: /^http/,
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  })
  