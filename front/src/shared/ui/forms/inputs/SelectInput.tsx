import { Form, Select } from "antd";
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
    <Form.Item
      label={label}
      htmlFor={id}
      help={error?.message}
      validateStatus={invalid ? "error" : ""}
      required={!!rules?.required}
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
    </Form.Item>
  );
};

export default SelectInput;
