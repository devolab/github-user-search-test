import { ReactNode } from "react";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { FormSchemaType } from "../../types/form.types"

interface IPhoneBookFormHeadProps {
  handleSubmit: UseFormHandleSubmit<FormSchemaType>;
  handleForm: SubmitHandler<FormSchemaType>;
  children: ReactNode[];
  classname: string
}

export default function Form(props: IPhoneBookFormHeadProps) {
  const { handleSubmit, handleForm, children, classname } = props;

  return <form onSubmit={handleSubmit(handleForm)} className={classname} role="form">{children}</form>;
};