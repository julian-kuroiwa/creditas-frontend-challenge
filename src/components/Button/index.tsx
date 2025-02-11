import { ButtonProps } from './types'
import * as S from './styles'

const Button = ({ size = 'medium', children, ...props }: ButtonProps) => {
  return (
    <S.Button size={size} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
