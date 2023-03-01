import 'swiper/css'
import {Slider} from './components/Slider'
import Header from './components/Header'

import slides from './assets/nft.json'

export default function App() {
  return (
    <div id="App">
      <Header />
      <Slider slides={slides} />
    </div>
  )
}
