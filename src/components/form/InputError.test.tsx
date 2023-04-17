import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import InputError from './InputError.comp'

describe('InputError', () => {
  it('renders the error message when there is an error for the input', () => {
    const props = {
      errors: {
        username: {
          message: 'Username is required',
          type: 'required',
          ref: null
        }
      },
      name: 'username'
    }

    render(<InputError {...props} />)

    const errorMessage = screen.getByText('Username is required')
    expect(errorMessage).toBeInTheDocument()
  })

  it('does not render anything when there is no error for the input', () => {
    const props = {
      errors: {},
      name: 'username'
    }

    render(<InputError {...props} />)

    const errorMessage = screen.queryByText('Username is required')
    expect(errorMessage).not.toBeInTheDocument()
  })
})
