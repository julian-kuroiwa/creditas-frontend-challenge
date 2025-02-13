import { Loader } from '../Loader'
import { ButtonProps } from './types'

import * as S from './styles'

const Button = ({
  size = 'medium',
  children,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <S.Button size={size} {...props} disabled={isLoading}>
      {isLoading ? <Loader data-testid="loader-button" /> : children}
    </S.Button>
  )
}

export default Button
