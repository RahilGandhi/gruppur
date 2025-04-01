import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/authContext.jsx'
import { HeroUIProvider } from '@heroui/react'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </AuthProvider>
)
