import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Argentina from './Argentina' 
import ContadorApp from './ContadorApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ContadorApp value={12345}/>
  </React.StrictMode>
)
