export function addToCart() {
  const speedAnimation = 1000
  const cartValue = document.querySelector('.CART span')

  document.addEventListener('click', function (e) {
    const targetElement = e.target
    const productSlide = targetElement.closest('.SLIDE')

    if (!productSlide) return

    const productImage = productSlide.querySelector('.PICTURE')
    const productImageFly = productImage.cloneNode(true)

    const cart = document.querySelector('.CART') // Moved this line inside the click event handler
    const cartPos = {
      left: cart.getBoundingClientRect().left,
      top: cart.getBoundingClientRect().top,
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

    requestAnimationFrame(() => {
      productImageFly.style.left = `${cartPos.left}px`
      productImageFly.style.top = `${cartPos.top}px`
      productImageFly.style.width = `0px`
      productImageFly.style.height = `50px`
      productImageFly.style.opacity = `0.5`

      setTimeout(() => {
        requestAnimationFrame(() => {
          cartValue.innerHTML = ++cartValue.innerHTML
        })
      }, speedAnimation)
    })
  })
}
