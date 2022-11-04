import { Form } from "../../assets/forms/post";
import { SelectInput, TextInput } from "../../components/inputs";
import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export const formRenderer = <T extends FieldValues>(
  form: Form<T>,
  register: UseFormRegister<T>,
  errors: FieldErrors<T>
) => {
  return (
    <>
      {form.map((field) => {
        const error = errors[field.name] as FieldError | undefined;

        switch (field.type) {
          case "text":
            return (
              <TextInput
                label={field.label}
                required={field.required}
                error={error}
                key={`input-${field.label}`}
                {...register(field.name, { required: field.required })}
              />
            );
          case "select":
            return (
              <SelectInput
                options={field.options ?? []}
                label={field.label}
                error={error}
                required
                {...register(field.name, { required: field.required })}
              />
            );
          default:
            return <></>;
        }
      })}
    </>
  );
};
