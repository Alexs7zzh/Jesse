const headings = [...document.querySelectorAll('article h2, article h3')]
let current = null

const callback = e => {
  e.forEach(i => {
    if (i.isIntersecting === true && i.boundingClientRect.top >= 10) {
      Array.from(document.querySelectorAll('.toc a')).forEach(i => i.classList.remove('toc-active'))
      current = document.querySelector(`.toc a[href="#${i.target.id}"]`)
      current.classList.add('toc-active')
    } else if (i.boundingClientRect.top >= 10 && current && i.target.id === current.getAttribute('href').replace(/^#/, '')) {
      current.classList.remove('toc-active')
      const previous = current.parentElement.previousElementSibling && current.parentElement.previousElementSibling.querySelector('a')
      if (previous) {
        current = previous
        previous.classList.add('toc-active')
      }
    }
  })
}

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '0px',
  threshold: 1
})

headings.forEach(i => observer.observe(i))