import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Skaye } from './m10/gambar1'
import {BookList} from './m14/coba'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList/>
  </StrictMode>,
)
