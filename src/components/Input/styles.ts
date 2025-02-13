import styled from 'styled-components'
import { theme } from '~/styles/theme'
import { LabelProps } from './types'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Container = styled.div`
  height: 64px;
  position: relative;
  padding: 0px ${theme.spacing.s};
  border-radius: 16px;
  background-color: ${theme.colors.gray.light};
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  width: 100%;
`
export const Label = styled.label<LabelProps>`
  color: ${({ hasError }) =>
    hasError ? theme.colors.error : theme.colors.gray.medium};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 16px;
  display: block;
  transition: 0.2s;
`

export const Input = styled.input`
  border: none;
  background: transparent;
  outline: none;
  padding: 0px;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.dark};
  margin-top: calc(${theme.spacing.xs} / 2);
  resize: none;
  height: 24px;
  width: 100%;
  z-index: 1;

  ${Container}:has(> &:focus) {
    box-shadow:
      rgba(0, 0, 0, 0.08) 0px 12px 12px,
      rgba(0, 0, 0, 0.08) 0px 0px 8px;
    background-color: ${theme.colors.light};
  }

  &:-webkit-autofill,
  &:not(:placeholder-shown) + ${Label}, &:focus + ${Label} {
    top: 13px;
    font-size: ${theme.font.text.size.xs};
  }
`

export const Error = styled.span`
  font-size: ${theme.font.text.size.xs};
  color: ${theme.colors.error};
  margin-top: ${theme.spacing.xs};
  display: block;
`
