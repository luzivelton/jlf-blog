import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from '@/providers/Providers'
import { Blog } from '@/pages/Blog/Blog'
import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Blog />
    </Providers>
  </StrictMode>
)
