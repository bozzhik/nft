'use strict'
window.addEventListener('load', windowLoaded)

function windowLoaded() {
  const isMobile = /Mobile/.test(navigator.userAgent)

  if (!isMobile) {
    if (document.querySelector('#slider')) {
      new Swiper('#slider', {
        loop: true,
        speed: 1000,
        parallax: true,
        mousewheel: true,
        keyboard: true,
        on: {
          init: function () {
            document.documentElement.classList.add('loaded')
            document.body.style.backgroundImage = 'linear-gradient(to bottom, #ff0000, #0000ff)'
          },

          slideChange: function () {
            const bgColors = {
              0: 'linear-gradient(to right, #312093, #8ea8ff)',
              1: 'linear-gradient(to right, #702093, #ca8eff)',
              2: 'linear-gradient(to right, #d7a210, #fff48e)',
              3: 'linear-gradient(to right, #ff8200, #ffcc00)',
              4: 'linear-gradient(to right, #95ff00, #00ff5e)',
              5: 'linear-gradient(to right, #a300cc, #e6b3ff)',
              6: 'linear-gradient(to right, #1a1a1a, #494949)',
              7: 'linear-gradient(to right, #9000ff, #b300ff)',
              8: 'linear-gradient(to right, #ff00c8, #d159c3)'
            }

            const app = document.getElementById('App')
            const swiper = this
            const slideIndex = swiper.realIndex
            const gradient = bgColors[slideIndex]

            setTimeout(() => {
              app.style.backgroundImage = gradient
            }, 500)
          }
        }
      })
    }

    const cart = document.querySelector('.CART')
    const cartValue = document.querySelector('.CART span')
    const speedAnimation = 1000

    document.addEventListener('click', function (e) {
      const targetElement = e.target

      const productSlide = targetElement.closest('.SLIDE')
      const productImage = productSlide.querySelector('.PICTURE')
      const productImageFly = productImage.cloneNode(true)

      const cartPos = {
        left: cart.getBoundingClientRect().left,
        top: cart.getBoundingClientRect().top
      }

      productImageFly.style.cssText = `
        position: 'fixed';
        left: ${productImage.getBoundingClientRect().left}px;
        top: ${productImage.getBoundingClientRect().top}px;
        width: ${productImage.offsetWidth}px;
        height: ${productImage.offsetHeight}px;
        transition: all ${speedAnimation}ms ease;
        `

      document.body.append(productImageFly)

      setTimeout(() => {
        productImageFly.style.left = `${cartPos.left}px`
        productImageFly.style.top = `${cartPos.top}px`
        productImageFly.style.width = `0px`
        productImageFly.style.height = `50px`
        productImageFly.style.opacity = `0.5`
      }, 0)

      setTimeout(() => {
        cartValue.innerHTML = ++cartValue.innerHTML
      }, speedAnimation)
    })
  } else if (isMobile) {
    alert('телефон')
  }
}
