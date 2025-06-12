import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import appStore from './utils/appStore.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={appStore}>
     <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
