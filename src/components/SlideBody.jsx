import { useRef, useState } from 'react'

export default function SlideBody({ caption, price, buttonText, imageUrl }) {
  return (
    <div className="relative flex flex-col min-h-full px-5 pt-32 pb-5 shrink-0">
      <div className="relative flex items-center justify-center flex-auto">
        <div className="w-[75vh] max-w-[90%] mx-auto my-0">
          <div className="flex-auto relative pb-[90%]">
            <img className="absolute top-0 left-0 object-contain w-full h-full drop-shadow-custom" src={imageUrl} alt="image" />
          </div>
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center mix-blend-difference z-[-2]">
          <h2 className="text-[20vmin] leading-[1.3] uppercase font-bold">{caption}</h2>
        </div>
      </div>
      <div className="mx-auto mt-16 w-full max-w-[990px] flex justify-between gap-5">
        <div className="text-4xl font-medium leading-[1.3]">{price} ETH</div>
        <button className="flex-initial text-4xl uppercase underline leading-[1.3] font-medium hover:no-underline" type="button">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
