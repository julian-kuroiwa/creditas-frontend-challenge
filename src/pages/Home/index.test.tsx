import { act } from 'react'
import {
  fireEvent,
  queryByTestId,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { vi } from 'vitest'

import Home from './'

describe('Home', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Home />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should show input error when submit button is clicked without fill up a form', async () => {
    const { getByRole, findAllByText } = render(<Home />)

    const submitButton = getByRole('button')
    act(() => fireEvent.submit(submitButton))

    const errorMessage = await findAllByText(/Campo obrigatório/i)

    expect(errorMessage).toHaveLength(3)
  })

  it('should show error if the user is under 18', async () => {
    const { getByLabelText, findByText } = render(<Home />)

    const birthDateInput = getByLabelText(/data de nascimento/i)

    act(() => {
      fireEvent.change(birthDateInput, { target: { value: '2024-12-10' } })
    })

    expect(
      await findByText(
        'Você tem que ser maior de 18 anos para pedir empréstimo',
      ),
    ).toBeInTheDocument()
  })

  it('should show results when all is filled up and the submit button is clicked', async () => {
    const { findByTestId, getByLabelText, getByRole } = render(<Home />)

    const amountInput = getByLabelText(/valor do empréstimo/i)
    const monthlyRateInput = getByLabelText(/prazo do pagamento/i)
    const birthDateInput = getByLabelText(/data de nascimento/i)
    const submitButton = getByRole('button')

    act(() => {
      fireEvent.change(amountInput, { target: { value: 50000 } })
      fireEvent.change(monthlyRateInput, { target: { value: 12 } })
      fireEvent.change(birthDateInput, { target: { value: '2001-12-10' } })
      fireEvent.submit(submitButton)
    })

    expect(await findByTestId('results-card')).toBeInTheDocument()
  })
})
