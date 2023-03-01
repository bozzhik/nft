import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
if (window.matchMedia('(max-width: 768px)').matches) {
  import('./mobile.css')
} else {
  import('./index.css')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
