import styled from 'styled-components'

import { theme } from '~/styles/theme'
import { ButtonStyleProps } from './types'

export const Button = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 16px;
  font-size: ${theme.font.text.size.m};
  min-height: 32px;
  max-height: 60px;

  transition: all 0.2s;
  width: 100%;
  background-color: ${theme.colors.button.default};

  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.16) 0px 16px 12px -8px,
      rgba(0, 0, 0, 0.12) 0px 16px 8px -12px;
  }

  &[disabled] {
    background-color: ${theme.colors.gray.medium};
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: none;
    }
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          border-radius: 8px;
          height: 32px;
          font-size: ${theme.font.text.size.s};
        `
      case 'medium':
        return `height: 44px;`
      case 'large':
        return `
          height: 60px;
        `
    }
  }}
`
