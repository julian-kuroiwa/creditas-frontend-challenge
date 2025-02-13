import { InputProps } from './types'

import * as S from './styles'

const Input = ({ label, id, errorMessage, ...props }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Input {...props} id={id} placeholder=" " />
        <S.Label hasError={!!errorMessage} htmlFor={id}>
          {label}
        </S.Label>
      </S.Container>
      {errorMessage && <S.Error>{errorMessage}</S.Error>}
    </S.Wrapper>
  )
}

export default Input
