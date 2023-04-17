import { ChangeEvent } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface IInputFieldProps {
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  options?: RegisterOptions;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string
  classname: string;
}

export default function InputField(props: IInputFieldProps) {
  const {
    name,
    type,
    register,
    required = false,
    options = {},
    onChange,
    placeholder,
    classname
  } = props;

  return (
    <input
      id={name}
      type={!type ? "text" : type}
      placeholder={placeholder}
      className={classname}
      {...register(name, { required, onChange: onChange, ...options })}
    />
  );
};
