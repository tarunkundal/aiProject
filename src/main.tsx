import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './modules/app/App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { customTheme } from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
)
