import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button.comp';

describe('Button', () => {
  const options = {
    label: 'click me',
    className: 'button',
    type: 'submit',
    onClick: vi.fn(),
  };

  beforeEach(() => {
    render(<Button {...options} />);
  });

  it('renders the label correctly', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveValue(options.label);
  });

  it('applies the classname correctly', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass(options.className);
  });

  it('renders the correct button type', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', options.type);
  });

  it('calls the onClick function when clicked', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(options.onClick.mock.calls.length).toBe(1);
  });
});

