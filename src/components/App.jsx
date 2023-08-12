import {useRef, useEffect, useState} from 'react'

import {Slider} from './Slider'
import Header from './Header'
import slides from '../assets/nft.json'

export default function App() {
  const appRef = useRef(null)
  const [backgroundImage, setBackgroundImage] = useState('linear-gradient(to right, #312093, #8ea8ff)')

  useEffect(() => {
    if (appRef.current) {
      appRef.current.style.backgroundImage = backgroundImage
    }
  }, [backgroundImage])

  return (
    <main ref={appRef} id="App" className={`WRAPPER fixed inset-0 flex flex-col w-screen h-screen overflow-auto text-white font-grotesque`}>
      <Header />
      <Slider slides={slides} setBackgroundGradient={setBackgroundImage} />
    </main>
  )
}
