import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Counter } from './m8/number'
import { UseCounter } from './m8/gambar1'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCounter />
  </StrictMode>,
)
