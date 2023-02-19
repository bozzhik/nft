'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
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
}
