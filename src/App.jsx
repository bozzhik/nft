import React, {useRef, useEffect} from 'react'
import {Slider} from './components/Slider'
import Header from './components/Header'
import slides from './assets/nft.json'
import 'swiper/css'

export default function App() {
  const debugScreens = import.meta.env.DEV ? 'debug-screens' : ''

  const appRef = useRef(null)

  useEffect(() => {
    if (appRef.current) {
      appRef.current.style.backgroundImage = 'linear-gradient(to right, #312093, #8ea8ff)'
    }
  }, [])

  return (
    <div ref={appRef} id="App" className={`fixed top-0 left-0 flex flex-col w-full h-full overflow-auto WRAPPER ${debugScreens}`}>
      <Header />
      <Slider slides={slides} />
    </div>
  )
}
