import SlideBody from './SlideBody'

const Product = () => {
  return (
    <div className="flex flex-col flex-auto">
      <div id="slider" className="min-h-full overflow-hidden swiper">
        <div className="flex max-h-full swiper-wrapper">
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption1="NIKEdd MAG" caption2="BACK TO THE FUTURE" price="749" buttonText="BUY NOW" imageUrl="/src/img/image-01.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption1="NsdIKE MAG" caption2="BACK TO THE FUTURE" price="749" buttonText="BUY NOW" imageUrl="/src/img/image-01.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption1="NIdddsdKE MAG" caption2="BACK TO THE FUTURE" price="749" buttonText="BUY NOW" imageUrl="/src/img/image-01.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
