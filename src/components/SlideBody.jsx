import { useRef, useState } from 'react'

export default function SlideBody({ caption, price, buttonText, imageUrl }) {
  const wrapperRef = useRef(null)
  const textRef = useRef(null)
  const [isZIndexLow, setIsZIndexLow] = useState(false)

  const handleClick = () => {
    if (isZIndexLow) {
      wrapperRef.current.style.zIndex = '-10'
    } else {
      wrapperRef.current.style.zIndex = '10'
    }
    setIsZIndexLow(!isZIndexLow)
  }

  return (
    <div className="relative flex flex-col min-h-full px-5 pt-32 pb-5 shrink-0">
      <div className="relative flex items-center justify-center flex-auto">
        <div className="w-[75vh] max-w-[90%] mx-auto my-0">
          <div className="flex-auto relative pb-[90%] after:absolute after:bottom-0 after:right-0 after:w-[82.5%] after:pb-[6%] after:bg-[#111] after:bg-opacity-10 after:blur-lg after:rounded-[50%]">
            <img className="absolute top-0 left-0 object-contain w-full h-full drop-shadow-custom" src={imageUrl} alt="image" />
          </div>
        </div>
        <div ref={wrapperRef} className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center mix-blend-difference" onClick={handleClick} style={{ zIndex: isZIndexLow ? '-2' : '2' }}>
          <h2 ref={textRef} className="text-[17vmin] leading-[1.3] uppercase font-bold">
            {caption}
          </h2>
        </div>
      </div>
      <div className="mx-auto mt-16 w-full max-w-[990px] flex justify-between gap-5">
        <div className="text-4xl font-medium leading-[1.3]">${price}</div>
        <button className="flex-initial text-4xl uppercase underline leading-[1.3] font-medium hover:no-underline" type="button">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
