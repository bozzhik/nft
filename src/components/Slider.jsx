import SlideBody from './SlideBody'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Keyboard, Scrollbar, Navigation, Pagination} from 'swiper'

export const Slider = ({slides}) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={2} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.caption} />
        </SwiperSlide>
      ))}
      <SwiperSlide className="text-black">Slide 1</SwiperSlide>
      <SwiperSlide className="text-black">Slide 2</SwiperSlide>
      <SwiperSlide className="text-black">Slide 3</SwiperSlide>
      <SwiperSlide className="text-black">Slide 4</SwiperSlide>
      ...
    </Swiper>
  )
}

// return (
//   <div className="flex flex-col flex-auto">
//     <div id="slider" className="min-h-full overflow-hidden swiper">
//       <div className="flex max-h-full swiper-wrapper">
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="strong samurai" price="1.425" buttonText="BUY NOW" imageUrl="/nft/skull-01.webp" />
//         </div>
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="neon gangster" price="1.325" buttonText="BUY NOW" imageUrl="/nft/skull-02.webp" />
//         </div>
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="banana bandit" price="1.375" buttonText="BUY NOW" imageUrl="/nft/skull-03.webp" />
//         </div>
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="many-eyed" price="1.215" buttonText="BUY NOW" imageUrl="/nft/skull-04.webp" />
//         </div>
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="cool baby" price="1.155" buttonText="BUY NOW" imageUrl="/nft/skull-05.webp" />
//         </div>
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="robocop vampire" price="1.105" buttonText="BUY NOW" imageUrl="/nft/skull-06.webp" />
//         </div>
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="domsday farmer" price="1.250" buttonText="BUY NOW" imageUrl="/nft/skull-07.webp" />
//         </div>
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="sports smoker" price="1.115" buttonText="BUY NOW" imageUrl="/nft/skull-08.webp" />
//         </div>
//         <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
//           <SlideBody caption="crazy hipster" price="1.250" buttonText="BUY NOW" imageUrl="/nft/skull-09.webp" />
//         </div>
//       </div>
//     </div>
//   </div>
// )
