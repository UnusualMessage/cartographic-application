import { FormGroup, InputGroup } from "@blueprintjs/core";
import { v4 as uuid } from "uuid";
import { ChangeEvent, forwardRef } from "react";

interface Props {
  label: string;
  required?: boolean;
  invalid?: boolean;
  value?: string;
  defaultValue?: string;
  onChange: (event: ChangeEvent) => void;
  name: string;
}

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const id = uuid();

  const { label, required, invalid, value, defaultValue, name, onChange } =
    props;

  return (
    <FormGroup
      label={label}
      labelFor={id}
      labelInfo={required ? "(обязательно для заполнения)" : undefined}
      intent={invalid ? "danger" : "primary"}
    >
      <InputGroup
        id={id}
        placeholder={"Введите текст..."}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        inputRef={ref}
      />
    </FormGroup>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
