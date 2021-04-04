const fg = require('fast-glob')
const fs = require('fs-extra')

const files = fg.sync(['content/posts/*.md'])
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8')
  content = content.replace(/assets\/images/g, 'assets')
  fs.writeFileSync(file, content)
}

// ![]({{ "/assets/images/2021/lifehacking-101-deluxe-payment.jpg" | absolute_url }})