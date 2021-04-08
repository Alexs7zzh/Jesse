const fg = require('fast-glob')
const fs = require('fs-extra')
const matter = require('gray-matter')

const files = fg.sync(['content/posts/*.md'])
for (const entry of files) {
  let content = fs.readFileSync(entry, 'utf8')
  let file = matter(content)
  if (file.data.excerpt_img !== undefined) {
    delete file.data.excerpt_img
    fs.writeFileSync(entry, matter.stringify(file.content, file.data))
  }
}

// ![]({{ "/assets/images/2021/lifehacking-101-deluxe-payment.jpg" | absolute_url }})

// content/posts/2015-02-28-ni-you-bi.md true false undefined