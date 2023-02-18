'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
  if (document.querySelector('#slider')) {
    new Swiper('#slider', {
      loop: true,
      speed: 1000,
      parallax: true,
      mousewheel: true,
      keyboard: true
    })
  }
}
