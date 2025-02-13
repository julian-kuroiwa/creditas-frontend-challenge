import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonStyleProps = {
  size?: 'small' | 'medium' | 'large'
}

export interface ButtonProps
  extends ButtonStyleProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
}
