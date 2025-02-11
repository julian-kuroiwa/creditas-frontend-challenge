import * as S from './styles'
import { InputProps } from './types'

const Input = ({ label, id, errorMessage, ...props }: InputProps) => {
  return (
    <>
      <S.Container>
        <S.Input {...props} id={id} />
        <S.Label htmlFor={id} hasError={!!errorMessage}>
          {label}
        </S.Label>
      </S.Container>
      {errorMessage && <S.Error>{errorMessage}</S.Error>}
    </>
  )
}

export default Input
