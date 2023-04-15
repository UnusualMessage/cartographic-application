import { Fragment } from "react";
import { FieldValues, Control } from "react-hook-form";

import type { Form } from "../../../misc";
import {
  TextInput,
  SelectInput,
  NumberInput,
  PasswordInput,
} from "../../../ui";

export const formRenderer = <T extends FieldValues>(
  fields: Form<T>,
  control: Control
) => {
  return (
    <>
      {fields.map((field) => {
        if (field.hidden) {
          return <Fragment key={`input-${field.label}`} />;
        }

        const props = {
          key: `input-${field.label}`,
          label: field.label,
          options: field.options ?? [],
          disabled: field.disabled,
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
          case "password":
            return <PasswordInput {...props} />;
          default:
            return <Fragment key={`input-${field.label}`} />;
        }
      })}
    </>
  );
};
