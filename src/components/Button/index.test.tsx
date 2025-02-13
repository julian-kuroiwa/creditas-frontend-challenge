import { fireEvent, render } from '@testing-library/react'
import { vi } from 'vitest'

import Button from './'

const onClick = vi.fn()
const buttonLabel = 'Click me'

describe('Button', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Button onClick={onClick}>{buttonLabel}</Button>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should fire onClick method if the button is clicked', () => {
    const { getByRole } = render(
      <Button onClick={onClick}>{buttonLabel}</Button>,
    )

    const button = getByRole('button')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should have a loading if isLoading is passed', () => {
    const { getByTestId } = render(
      <Button onClick={onClick} isLoading>
        {buttonLabel}
      </Button>,
    )

    const loader = getByTestId('loader-button')

    expect(loader).toBeInTheDocument()
  })
})
