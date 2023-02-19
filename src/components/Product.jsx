import SlideBody from './SlideBody'

export default function Product() {
  return (
    <div className="flex flex-col flex-auto">
      <div id="slider" className="min-h-full overflow-hidden swiper">
        <div className="flex max-h-full swiper-wrapper">
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="bearded samurai" price="749" buttonText="BUY NOW" imageUrl="/src/img/skull-01.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="neon gangster" price="749" buttonText="BUY NOW" imageUrl="/src/img/skull-02.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="banana bandit" price="749" buttonText="BUY NOW" imageUrl="/src/img/skull-03.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
