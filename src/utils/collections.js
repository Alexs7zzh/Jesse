const { DateTime } = require('luxon')

module.exports = config => {
  config.addCollection('posts', collection => 
    collection.getFilteredByGlob('content/posts/*.md')
      .sort((a, b) => (b.date - a.date))
  )
  
  config.addCollection('postsByYear', collection => {
    let yearSet = new Set()
    let posts = collection.getFilteredByGlob('content/posts/*.md')
    posts.forEach(item => {
      yearSet.add(DateTime.fromJSDate(item.date).year)
    })
    return [...yearSet]
      .sort((a, b) => b - a)
      .map(year => [
        year,
        posts
          .filter(item => DateTime.fromJSDate(item.date).year == year)
          .sort((a, b) => b.date - a.date)
      ])
  })
}
