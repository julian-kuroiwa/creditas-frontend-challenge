import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  errorMessage?: string
}

export type LabelProps = {
  hasError: boolean
}
