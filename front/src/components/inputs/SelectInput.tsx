import { FormGroup, HTMLSelect } from "@blueprintjs/core";
import { ChangeEvent, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { SelectOption } from "../../types/forms";

interface Props {
  options: SelectOption[];
  label: string;
  required?: boolean | string;
  value?: string;
  defaultValue?: string;
  onChange: (event: ChangeEvent) => void;
  name: string;
  error?: FieldError;
}

const SelectInput = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const {
    options,
    label,
    required,
    onChange,
    name,
    value,
    defaultValue,
    error,
  } = props;

  const id = uuid();

  return (
    <FormGroup
      label={label}
      labelFor={id}
      helperText={error ? error.message : undefined}
      labelInfo={required ? "(обязательно для заполнения)" : undefined}
      intent={error ? "danger" : required ? "primary" : "none"}
    >
      <HTMLSelect
        id={id}
        placeholder={"Выберите..."}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        elementRef={ref}
        fill
      >
        {options.map((option) => {
          return (
            <option key={`select-${option.value}`} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </HTMLSelect>
    </FormGroup>
  );
});

SelectInput.displayName = "SelectInput";

export default SelectInput;
