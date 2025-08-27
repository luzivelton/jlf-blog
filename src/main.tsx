import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import { Providers } from '@/providers/Providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>DWS blog</Providers>
  </StrictMode>
)
