const fg = require('fast-glob')
const fs = require('fs-extra')
const matter = require('gray-matter')

const files = fg.sync(['content/posts/*.md'])
for (const entry of files) {
  let content = fs.readFileSync(entry, 'utf8')
  let file = matter(content)
  if (file.data.excerpt_img !== undefined) {
    file.data.excerpt_img = undefined
    console.log(matter.stringify(file, file.data))
    break
  }
}

// ![]({{ "/assets/images/2021/lifehacking-101-deluxe-payment.jpg" | absolute_url }})

// content/posts/2015-02-28-ni-you-bi.md true false undefined