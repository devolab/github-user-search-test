import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Loader from './Loader.comp'

describe('Loader', () => {
  it('renders loader element', () => {
    render(<Loader />)
    const loaderElement = screen.getByRole('loader')
    expect(loaderElement).toBeInTheDocument()
    expect(loaderElement).toHaveClass('loader')
  })
})
