import { describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form.comp'

describe('Form', () => {
  const mockHandleSubmit = vi.fn()
  const mockHandleForm = vi.fn()
  const mockChildren = [<input key="1" name="username" type="text" />]
  const mockClassname = "form-class"

  it('renders the form correctly', () => {
    render(
      <Form
        handleSubmit={mockHandleSubmit}
        handleForm={mockHandleForm}
        children={mockChildren}
        classname={mockClassname}
      />
    )

    const form = screen.getByRole('form')

    expect(form).toBeInTheDocument()
    expect(form).toHaveClass(mockClassname)
  })

  it('calls handleSubmit when the form is submitted', () => {
    render(
      <Form
        handleSubmit={mockHandleSubmit}
        handleForm={mockHandleForm}
        children={mockChildren}
        classname={mockClassname}
      />
    )

    expect(mockHandleSubmit).toHaveBeenCalled()
  })
})
