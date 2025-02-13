import { render } from '@testing-library/react'
import Input from '.'

describe('Input', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Input id="input-test" type="text" label="Input test" />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should show an error message if the props errorMessage is passed', () => {
    const errorMessage = 'this is an error message'
    const { getByText } = render(
      <Input
        id="input-test"
        type="text"
        label="Input test"
        errorMessage={errorMessage}
      />,
    )

    expect(getByText(errorMessage)).toBeTruthy()
  })
})
