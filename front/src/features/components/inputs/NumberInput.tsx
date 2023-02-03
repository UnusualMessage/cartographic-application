import { FormGroup, NumericInput } from "@blueprintjs/core";
import { ChangeEvent, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { v4 as uuid } from "uuid";

interface Props {
  label: string;
  required?: boolean | string;
  value?: string;
  defaultValue?: string;
  onChange: (event: ChangeEvent) => void;
  name: string;
  error?: FieldError;
}

const NumberInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const id = uuid();

  const { label, required, value, defaultValue, name, onChange, error } = props;

  return (
    <FormGroup
      label={label}
      labelFor={id}
      labelInfo={required ? "(обязательно для заполнения)" : undefined}
      intent={error ? "danger" : required ? "primary" : "none"}
      helperText={error ? error.message : undefined}
    >
      <NumericInput
        id={id}
        placeholder={"Введите число..."}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        inputRef={ref}
        intent={error ? "danger" : required ? "primary" : "none"}
        fill
      />
    </FormGroup>
  );
});

NumberInput.displayName = "TextInput";

export default NumberInput;
