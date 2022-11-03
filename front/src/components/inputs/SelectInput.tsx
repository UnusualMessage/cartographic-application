import { FormGroup, HTMLSelect } from "@blueprintjs/core";
import { ChangeEvent, forwardRef } from "react";
import { v4 as uuid } from "uuid";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  label: string;
  required?: boolean;
  invalid?: boolean;
  value?: string;
  defaultValue?: string;
  onChange: (event: ChangeEvent) => void;
  name: string;
}

const SelectInput = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const {
    options,
    label,
    required,
    invalid,
    onChange,
    name,
    value,
    defaultValue,
  } = props;

  const id = uuid();

  return (
    <FormGroup
      label={label}
      labelFor={id}
      labelInfo={required ? "(обязательно для заполнения)" : undefined}
      intent={invalid ? "danger" : "primary"}
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
