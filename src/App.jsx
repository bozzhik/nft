import Header from './components/Header'
import Slider from './components/Slider'

export default function App() {
  return (
    <div className={`bg-gradient-to-r from-gradient-start to-gradient-stop fixed top-0 left-0 flex flex-col w-full h-full overflow-auto WRAPPER`}>
      <Header />
      <Slider />
    </div>
  )
}
