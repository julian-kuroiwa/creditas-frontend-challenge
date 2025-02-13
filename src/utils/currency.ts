export const formatCurrency = (
  amount: number,
  locale = 'pt-BR',
  currency = 'BRL',
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export const serializeCurrency = (value: string) => {
  const valueSerialized = value.replace(/\D/g, '')
  return Number(valueSerialized) / 100
}
