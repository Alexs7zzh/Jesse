const sections = Array.from(document.querySelectorAll('section.postlist'))
const match = window.location.href.match(/\?tag=(.+)/)

const getSectionChildren = section => Array.from(section.querySelectorAll('li'))
const getTags = el => el.dataset.tags ? el.dataset.tags.split(' ') : []
const hasTag  = (el, tag) => getTags(el).includes(tag)
const setHidden   = el => el.classList.add('hidden')
const setVisible  = el => el.classList.remove('hidden')

const filterPage = tag =>
  sections.forEach(section => {
    const items = getSectionChildren(section)
    if (items.filter(i => hasTag(i, tag)).length === 0) setHidden(section)
    else {
      setVisible(section)
      items.forEach(i => {
        if (hasTag(i, tag)) setVisible(i)
        else setHidden(i)
      })
    }
  })

Array.from(document.querySelectorAll('.tag-page li')).forEach(i => i.addEventListener('click', e => {
  let el = e.target
  while (el.tagName !== 'LI') el = el.parentElement
  const tag = el.dataset.tag
  if (tag !== undefined) {
    window.history.pushState({}, null, `/all/?tag=${tag}`)
    filterPage(tag)
  } else sections.forEach(s => {
    window.history.pushState({}, null, '/all/')
    setVisible(s)
    const items = getSectionChildren(s)
    items.forEach(i => setVisible(i))
  })
}))

if (match !== null) filterPage(decodeURI(match[1]))