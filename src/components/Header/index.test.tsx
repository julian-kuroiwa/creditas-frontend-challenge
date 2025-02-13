import { render } from '@testing-library/react'

import Header from './'

describe('Header', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })
})
