import { DeepMap, FieldError } from "react-hook-form";

interface IInputErrorProps {
  errors: DeepMap<any, FieldError>;
  name: string;
}

export default function InputError(props: IInputErrorProps) {
  const { errors, name } = props;

  return (
    <>
      {errors[name] && (
        <span className="error error-field">{errors[name]?.message}</span>
      )}
    </>
  );
};