import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './m2/App.jsx'
import ParentComponent from './m3/props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParentComponent />
  </StrictMode>,
)
