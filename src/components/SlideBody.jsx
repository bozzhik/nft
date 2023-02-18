function SlideBody({ caption1, caption2, price, buttonText, imageUrl }) {
  return (
    <div className="relative flex flex-col min-h-full px-5 pt-32 pb-5 shrink-0">
      <div className="relative flex items-center justify-center flex-auto">
        <div className="w-[75vh] max-w-[90%] mx-auto my-0">
          <div className="flex-auto relative pb-[90%] after:absolute after:bottom-0 after:right-0 after:w-[82.5%] after:pb-[6%] after:bg-[#111] after:bg-opacity-10 after:blur-lg after:rounded-[50%]">
            <img className="absolute top-0 left-0 object-contain w-full h-full drop-shadow-custom" src={imageUrl} alt="image" />
          </div>
        </div>
        <h2 className="absolute w-full h-full top-0 left-0 flex flex-col justify-center text-center items-center z-[2] text-[10vmin] leading-[1.3] uppercase font-bold mix-blend-difference">
          {caption1}
          <br />
          {caption2}
        </h2>
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

export default SlideBody
