import styled from 'styled-components'
import { theme } from '~/styles/theme'

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.m};
  height: ${theme.header.size.default};
  background-color: ${theme.colors.gray.dark};
`
