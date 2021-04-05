const { DateTime } = require('luxon')
const util = require('util')
const md = require('./markdown')
const fs = require('fs-extra')

module.exports = config => {
  config.addFilter('dateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd')
  })
  config.addFilter('shortDate', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('LL-dd')
  })
  
  config.addFilter('markdown', data => md.render(data).toString())
  config.addFilter('console', data => util.inspect(data))
  config.addFilter('svg', path => {
    const data = fs.readFileSync(path, (err, contents) => {
      if (err) throw new Error(err)
      return contents
    })
    return data.toString('utf8')
  })
  
  config.addFilter('pagination', (num, hrefs) => {
    const max = hrefs.length
    let start = num - 3, end = num + 3
    if (max <= 7) 
      return Array
        .from({length: max}, (_, i) => i + 1)
        .map(i => [i, hrefs[i - 1]])
      
    if (start < 1) {
      end += 1 - start
      start = 1
    } else if (end > max) {
      start -= end - max
      end = max
    }
    return Array
      .from({length: end}, (_, i) => i + 1)
      .slice(start - 1)
      .map(i => [i, hrefs[i - 1]])
  })
  
  config.addFilter('tags', collection => {
    let set = {}, result = [], min = 1000, max = 1, gap = 0
    
    collection.forEach(item => {
      if (item.data.tags)
        item.data.tags
          .forEach(t => {
            if (t in set) set[t] += 1
            else set[t] = 1
          })
    })
    
    for(let key in set) {
      result.push([key, set[key]])
      if (set[key] < min) min = set[key]
      if (set[key] > max) max = set[key]
    }
    
    gap = (max - min + 1) / 4
    
    result = result
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(arr => [...arr, Math.floor((arr[1] - min) / gap) + 1 ])
    
    return result
  })
}
