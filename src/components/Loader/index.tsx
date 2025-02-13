import styled from 'styled-components'
import { theme } from '~/styles/theme'

interface LoaderProps {
  size?: string
  color?: string
}

const mask =
  'conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;'

export const Loader = styled.div<LoaderProps>`
  width: ${({ size }) => size ?? '30px'};
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ color }) => color ?? theme.colors.light};
  -webkit-mask: ${mask};
  mask: ${mask};
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`
