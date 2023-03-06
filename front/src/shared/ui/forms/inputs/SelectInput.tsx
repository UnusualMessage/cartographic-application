import { FormGroup } from "@blueprintjs/core";
import { Select } from "antd";
import { useController, Control } from "react-hook-form";
import { v4 as uuid } from "uuid";

import type { SelectOption, Rules } from "../../../misc";

interface Props {
  options: SelectOption[];
  label: string;
  rules?: Rules;
  name: string;
  control: Control;
}

const { Option } = Select;

const SelectInput = ({ options, label, rules, name, control }: Props) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
  });

  const { invalid, error } = fieldState;

  const id = uuid();

  return (
    <FormGroup
      label={label}
      labelFor={id}
      helperText={error ? error.message : undefined}
      labelInfo={rules?.required ? "(обязательно для заполнения)" : undefined}
      intent={invalid ? "danger" : rules?.required ? "primary" : "none"}
    >
      <Select
        id={id}
        placeholder={"Выберите..."}
        status={invalid ? "error" : ""}
        style={{ width: "100%" }}
        {...field}
      >
        {options.map((option) => {
          return (
            <Option key={`select-${option.value}`} value={option.value}>
              {option.label}
            </Option>
          );
        })}
      </Select>
    </FormGroup>
  );
};

export default SelectInput;
