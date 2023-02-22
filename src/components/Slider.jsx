import skull02 from '../assets/nft/skull-02.png'
import skull01 from '../assets/nft/skull-01.png'
import skull03 from '../assets/nft/skull-03.png'
import skull04 from '../assets/nft/skull-04.png'
import skull05 from '../assets/nft/skull-05.png'
import skull06 from '../assets/nft/skull-06.png'
import skull07 from '../assets/nft/skull-07.png'
import skull08 from '../assets/nft/skull-08.png'
import skull09 from '../assets/nft/skull-09.png'

import SlideBody from './SlideBody'

export default function Slider() {
  return (
    <div className="flex flex-col flex-auto">
      <div id="slider" className="min-h-full overflow-hidden swiper">
        <div className="flex max-h-full swiper-wrapper">
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="strong samurai" price="1.425" buttonText="BUY NOW" imageUrl={skull01} />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="neon gangster" price="1.325" buttonText="BUY NOW" imageUrl={skull02} />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="banana bandit" price="1.375" buttonText="BUY NOW" imageUrl={skull03} />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="many-eyed" price="1.215" buttonText="BUY NOW" imageUrl={skull04} />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="cool baby" price="1.155" buttonText="BUY NOW" imageUrl={skull05} />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="robocop vampire" price="1.105" buttonText="BUY NOW" imageUrl={skull06} />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="domsday farmer" price="1.250" buttonText="BUY NOW" imageUrl={skull07} />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="sports smoker" price="1.115" buttonText="BUY NOW" imageUrl={skull08} />
          </div>
          <div className="relative flex flex-col min-h-full px-5 pt-0 pb-5 shrink-0 swiper-slide">
            <SlideBody caption="crazy hipster" price="1.250" buttonText="BUY NOW" imageUrl={skull09} />
          </div>
        </div>
      </div>
    </div>
  )
}
