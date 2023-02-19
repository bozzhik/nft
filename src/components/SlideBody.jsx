export default function SlideBody({ caption, price, buttonText, imageUrl }) {
  return (
    <div className="relative flex flex-col min-h-full px-5 pt-32 pb-5 shrink-0 sm:min-h-screen sm:px-0 sm:pt-16 SLIDE">
      <div className="relative flex items-center justify-center flex-auto BODY">
        <div className="w-[75vh] max-w-[90%] mx-auto my-0 flex sm:w-[100vh] sm:max-w-[100%] CONTENT">
          <div className="flex-auto relative pb-[90%]" data-swiper-parallax-opacity="0.5" data-swiper-parallax="0%" data-swiper-parallax-scale="0.3">
            <img className="absolute top-0 left-0 object-contain w-full h-full drop-shadow-custom PICTURE" src={imageUrl} alt="image" />
          </div>
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center mix-blend-difference z-[-2]">
          <h2 className="text-[20vmin] leading-[1.3] uppercase font-bold sm:text-[18vmin] sm:mt-16 sm:leading-[5]" data-swiper-parallax-opacity="0.5" data-swiper-parallax="0%" data-swiper-parallax-scale="0.4">
            {caption}
          </h2>
        </div>
      </div>
      <div className="mx-auto mt-16 w-full max-w-[990px] flex justify-between gap-5" data-swiper-parallax-opacity="0" data-swiper-parallax-scale="0.3">
        <div className="text-4xl font-medium leading-[1.3] sm:text-2xl PRICE">{price} ETH</div>
        <button className="flex-initial text-4xl uppercase underline leading-[1.3] font-medium hover:no-underline sm:text-2xl BUY" type="button">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
