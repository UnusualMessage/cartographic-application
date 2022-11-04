import { FormGroup, InputGroup } from "@blueprintjs/core";
import { v4 as uuid } from "uuid";
import { ChangeEvent, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  label: string;
  required?: boolean | string;
  value?: string;
  defaultValue?: string;
  onChange: (event: ChangeEvent) => void;
  name: string;
  error?: FieldError;
}

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const id = uuid();

  const { label, required, value, defaultValue, name, onChange, error } = props;

  return (
    <FormGroup
      label={label}
      labelFor={id}
      labelInfo={required ? "(обязательно для заполнения)" : undefined}
      intent={error ? "danger" : "primary"}
      helperText={error ? error.message : undefined}
    >
      <InputGroup
        id={id}
        placeholder={"Введите текст..."}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        inputRef={ref}
        intent={error ? "danger" : "primary"}
      />
    </FormGroup>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
