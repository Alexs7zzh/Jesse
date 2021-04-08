const fg = require('fast-glob')
const fs = require('fs-extra')

const files = fg.sync(['content/posts/*.md'])
for (const entry of files) {
  let content = fs.readFileSync(entry, 'utf8')
  const match = [...content.matchAll(/{{\s"(.+?)"\s\|\sabsolute_url\s}}/g)].map(i => [i[0], i[1]])
  if (match.length > 0) {
    match.forEach(pair => {
      content = content.replace(pair[0], pair[1])
    })
    fs.writeFileSync(entry, content)
  }
  //fs.writeFileSync(entry, content)
}

// ![]({{ "/assets/images/2021/lifehacking-101-deluxe-payment.jpg" | absolute_url }})

// content/posts/2015-02-28-ni-you-bi.md true false undefined