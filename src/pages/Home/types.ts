export interface ResultsProps {
  monthlyPayment: number
  totalPayment: number
  totalTaxPayment: number
}

export type FormValues = {
  amount: string
  paymentPeriod: string
  birthDate: string
}
