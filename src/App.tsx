import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import Home from './pages/Home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <GlobalStyle />
        <Home />
      </StrictMode>
    </ThemeProvider>
  )
}

export default App
