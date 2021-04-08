const headings = [...document.querySelectorAll('article h2, article h3')]
let current = null

const callback = e => {
  e.forEach(i => {
    if (i.isIntersecting === true) {
      if (current) current.classList.remove('toc-active')
      current = document.querySelector(`.toc a[href="#${i.target.id}"]`)
      current.classList.add('toc-active')
    } else if (i.boundingClientRect.top >= 10 && current) {
      current.classList.remove('toc-active')
      const previous = current.parentElement.previousElementSibling
      if (previous) previous.querySelector('a').classList.add('toc-active')
    }
  })
}

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '0px',
  threshold: 1
})

headings.forEach(i => observer.observe(i))