module.exports = {
  tags: data => {
    if (data.tags && data.tags[0] && data.tags[0].length !== 0)
      return data.tags[0].split(' ')
    return []
  }
}
