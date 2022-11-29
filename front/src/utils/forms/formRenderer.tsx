import { Form } from "../../types/forms";
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

        const props = {
          key: `input-${field.label}`,
          label: field.label,
          options: field.options ?? [],
          required: field.required,
          error: error,
          ...register(field.name, { required: field.required }),
        };

        switch (field.type) {
          case "text":
            return <TextInput {...props} />;
          case "select":
            return <SelectInput {...props} />;
          case "numeric":
            return <NumberInput {...props} />;
          default:
            return <></>;
        }
      })}
    </>
  );
};
