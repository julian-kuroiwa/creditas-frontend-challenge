import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import Input from './components/Input'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import * as S from './styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <GlobalStyle />
        <S.Title>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          nam.
        </S.Title>
        <Input label={'De quanto vc precisa?'} type="text" id="howMuchMoney" />
      </StrictMode>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
