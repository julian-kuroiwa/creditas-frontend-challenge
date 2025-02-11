import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import * as S from './styles'

const App = () => {
  return (
    <StrictMode>
      <S.Title>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
        nam.
      </S.Title>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
