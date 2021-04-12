window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

const images = [...document.querySelectorAll('figure img')]
const sizeSet = [... new Set(
  images
    .map(i => i.currentSrc &&i.currentSrc.match(/-(\d+)\.(webp|jpeg)$/)[1])
    .filter(i => i.length !== 0)
)]
/* global plausible */
sizeSet.forEach(i => plausible('Picture Size', { props: {size: i}}))
