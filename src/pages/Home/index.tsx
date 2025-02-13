import Input from '~/components/Input'
import * as S from './styles'
import Button from '~/components/Button'
import Header from '~/components/Header'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { schema, defaultValues } from './validation'
import { calculateLoan, formatCurrency, serializeCurrency } from '~/utils'
import { FormValues, ResultsProps } from './types'

const Home = () => {
  const [results, setResults] = useState<ResultsProps | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onChange',
  })

  const hasResults = !!results && !!Object.entries(results)

  const amountValue = watch('amount')
  const birthDateValue = watch('birthDate')
  const paymentPeriodValue = watch('paymentPeriod')

  useEffect(() => {
    if (!amountValue || !birthDateValue || !paymentPeriodValue) {
      setTimeout(() => {
        setResults(null)
      }, 600)
    }
  }, [amountValue, birthDateValue, paymentPeriodValue])

  useEffect(() => {
    if (amountValue) {
      setValue('amount', formatCurrency(serializeCurrency(amountValue)))
    }
  }, [amountValue])

  const onSubmit = (data: FormValues) => {
    setIsLoading(true)
    const { amount, paymentPeriod, birthDate } = data

    const { monthlyPayment, totalPayment, totalTaxPayment } = calculateLoan({
      value: serializeCurrency(amount),
      paymentPeriod: Number(paymentPeriod),
      birthDate,
    })

    setTimeout(() => {
      setResults({
        monthlyPayment,
        totalPayment,
        totalTaxPayment,
      })
      setIsLoading(false)
    }, 400)
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Simular Empréstimo</S.Title>
        <S.Card as={'form'} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Valor do empréstimo"
            id="loan-value-input"
            type="string"
            autoComplete="off"
            {...register('amount')}
            errorMessage={errors.amount?.message}
          />
          <S.Row>
            <Input
              type="number"
              label="Prazo do pagamento (em meses)"
              id="payment-period-input"
              {...register('paymentPeriod')}
              errorMessage={errors.paymentPeriod?.message}
            />
            <Input
              type="date"
              label="Data de nascimento"
              id="birthDate-input"
              {...register('birthDate')}
              errorMessage={errors.birthDate?.message}
            />
          </S.Row>
          <Button type="submit" size="large" isLoading={isLoading}>
            Simular
          </Button>
        </S.Card>
        {hasResults && (
          <S.Card forValues data-testid="results-card">
            <div>
              <h3>Valor total a ser pago</h3>
              <p>{formatCurrency(results?.totalPayment)}</p>
            </div>
            <div>
              <h3>Valor das parcelas mensais</h3>
              <p>{formatCurrency(results?.monthlyPayment)}</p>
            </div>
            <div>
              <h3>Total de juros pagos</h3>
              <p>{formatCurrency(results?.totalTaxPayment)}</p>
            </div>
          </S.Card>
        )}
      </S.Container>
    </>
  )
}

export default Home
