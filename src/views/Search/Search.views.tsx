import { useForm } from "react-hook-form";
import {
  Form,
  InputField,
  InputError,
  Button
} from "../../components/index.comp";

// zod
import { FormSchemaType } from "../../types/form.types";
import { formSchema } from "../../helpers/formSchema.helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHandleSearchRedirect } from "./hooks/useHandleSearchRedirect.hooks";

export default function Search() {

  // React-hook-form init
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    }
  });

  // hooks
  const { handleForm, setUsername } = useHandleSearchRedirect();

  // SearchForm
  return (
    <Form handleForm={handleForm} handleSubmit={handleSubmit} classname="form-container">

      {/** Search */}
      <div>
        <InputField
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          type="search"
          placeholder="Enter a username..."
          register={register}
          classname="form-inputfield"
          required />
        <br />
        <InputError
          name="username"
          errors={errors}
        />
      </div>

      <Button
        type="submit"
        classname="button-submit button-info-hover"
        label="Search"
      />
    </Form>
  );
}