import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pages from './m4/pages/page'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages />
  </StrictMode>,
)
