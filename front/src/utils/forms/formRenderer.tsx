import { Form } from "../../assets/forms/post";
import { SelectInput, TextInput } from "../../components/inputs";
import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import NumberInput from "../../components/inputs/NumberInput";

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
                key={`input-${field.label}`}
                label={field.label}
                required={field.required}
                error={error}
                {...register(field.name, { required: field.required })}
              />
            );
          case "select":
            return (
              <SelectInput
                key={`input-${field.label}`}
                options={field.options ?? []}
                label={field.label}
                required={field.required}
                error={error}
                {...register(field.name, { required: field.required })}
              />
            );
          case "numeric":
            return (
              <NumberInput
                key={`input-${field.label}`}
                label={field.label}
                required={field.required}
                error={error}
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
