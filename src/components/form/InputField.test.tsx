import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputField from './InputField.comp';

describe('InputField', () => {
  const name = 'test-name';
  const placeholder = 'test-placeholder';
  const classname = 'test-classname';
  const register = vi.fn();
  const onChange = vi.fn();

  it('renders input field with given props', () => {
    render(
      <InputField
        name={name}
        placeholder={placeholder}
        classname={classname}
        register={register}
        onChange={onChange}
      />
    );

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('class', classname);
    expect(register).toHaveBeenCalledWith(name, {
      required: false,
      onChange: onChange,
    });
  });

  it('renders input field with specified type', () => {
    const type = 'password';
    render(
      <InputField
        name={name}
        type={type}
        placeholder={placeholder}
        classname={classname}
        register={register}
        onChange={onChange}
      />
    );

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toHaveAttribute('type', type);
  });

  it('renders input field as required', () => {
    render(
      <InputField
        name={name}
        required={true}
        placeholder={placeholder}
        classname={classname}
        register={register}
        onChange={onChange}
      />
    );

    expect(register).toHaveBeenCalledWith(name, {
      required: true,
      onChange: onChange,
    });
  });
});
