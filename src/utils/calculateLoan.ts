import { differenceInYears } from 'date-fns'

interface CalculateLoanProps {
  value: number
  paymentPeriod: number
  birthDate: string
}

const getInterestRate = (birthDate: string) => {
  const today = new Date()
  const age = differenceInYears(today, new Date(birthDate))

  if (age <= 25) return 0.05
  if (age <= 40) return 0.03
  if (age <= 60) return 0.02
  return 0.04
}

export const calculateLoan = ({
  value,
  paymentPeriod,
  birthDate,
}: CalculateLoanProps) => {
  const monthlyRate = getInterestRate(birthDate) / 12
  const monthlyPayment =
    (value * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -paymentPeriod))
  const totalPayment = monthlyPayment * paymentPeriod
  const totalTaxPayment = totalPayment - value

  return {
    monthlyPayment,
    totalPayment,
    totalTaxPayment,
  }
}
