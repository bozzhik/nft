import SlideBody from './SlideBody'

export default function Product() {
  return (
    <div className="flex flex-col flex-auto">
      <div id="slider" className="min-h-full overflow-hidden swiper">
        <div className="flex max-h-full swiper-wrapper">
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="neon gangster" price="1.325" buttonText="BUY NOW" imageUrl="/src/img/skull-02.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="strong samurai" price="1.425" buttonText="BUY NOW" imageUrl="/src/img/skull-01.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="banana bandit" price="1.375" buttonText="BUY NOW" imageUrl="/src/img/skull-03.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="many-eyed" price="1.215" buttonText="BUY NOW" imageUrl="/src/img/skull-04.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="cool baby" price="1.155" buttonText="BUY NOW" imageUrl="/src/img/skull-05.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="robocop vampire" price="1.105" buttonText="BUY NOW" imageUrl="/src/img/skull-06.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="domsday farmer" price="1.250" buttonText="BUY NOW" imageUrl="/src/img/skull-07.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="sports smoker" price="1.115" buttonText="BUY NOW" imageUrl="/src/img/skull-08.png" />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="crazy hipster" price="1.250" buttonText="BUY NOW" imageUrl="/src/img/skull-09.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
