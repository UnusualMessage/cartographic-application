import { FieldValues, Control } from "react-hook-form";

import type { Form } from "../../../misc";
import { TextInput, SelectInput, NumberInput } from "../../../ui";

export const formRenderer = <T extends FieldValues>(
  fields: Form<T>,
  control: Control
) => {
  return (
    <>
      {fields.map((field) => {
        const props = {
          key: `input-${field.label}`,
          label: field.label,
          options: field.options ?? [],
          name: field.name,
          rules: field.rules,
          control,
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
