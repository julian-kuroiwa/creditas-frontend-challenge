import * as yup from 'yup'
import { getAgeByBirthDate } from '~/utils/getAgeByBirthDate'

export const defaultValues = {
  amount: '',
  paymentPeriod: '',
  birthDate: '',
}

export const schema = yup.object().shape({
  amount: yup.string().required('Campo obrigatório'),
  paymentPeriod: yup.string().required('Campo obrigatório'),
  birthDate: yup
    .string()
    .required('Campo obrigatório')
    .test({
      message: 'Você tem que ser maior de 18 anos para pedir empréstimo',
      test: (value) => (value ? getAgeByBirthDate(value) >= 18 : false),
    }),
})
