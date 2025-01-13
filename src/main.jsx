import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IconContextProvider } from './context/UpdateStore'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <IconContextProvider>
        <App />
      </IconContextProvider>
    </>
  </StrictMode>,
)
