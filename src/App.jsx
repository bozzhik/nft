import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className="mt-6 rounded border-transparent border-2 bg-[#1a1a1a] text-white text-xl font-medium cursor-pointer transition duration-500 ease-out px-3 py-1 grid place-items-center m-auto" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
