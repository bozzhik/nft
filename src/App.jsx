import Header from './components/Header'
import Product from './components/Product'

function App() {
  return (
    // <div className={`bg-${color}-500 text-white font-bold`}></div>
    <div className={`bg-gradient-to-r from-gradient-start to-gradient-stop fixed top-0 left-0 flex flex-col w-full h-full overflow-auto`}>
      <Header />
      <Product />
    </div>
  )
}

export default App
