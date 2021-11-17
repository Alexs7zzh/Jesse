const { DateTime } = require('luxon')

module.exports = {
  tags: data => {
    if (data.tags && data.tags[0] && data.tags[0].length !== 0)
      return data.tags[0].split(' ')
    return []
  },
  permalink: data => {
    if (!data.permalink) {
      const year = DateTime.fromJSDate(data.page.date).year
      return `/${String(year)}/${data.page.fileSlug}/`
    }
    return data.permalink
  }
}
