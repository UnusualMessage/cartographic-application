import { Form, Select } from "antd";
import { useController, Control } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { wrapper } from "./input.module.scss";
import type { SelectOption, Rules } from "../../../misc";

interface Props {
  options: SelectOption[];
  label: string;
  disabled?: boolean;
  rules?: Rules;
  name: string;
  control: Control;
}

const { Option } = Select;

const SelectInput = ({
  options,
  disabled,
  label,
  rules,
  name,
  control,
}: Props) => {
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
        disabled={disabled}
        placeholder={"Выберите..."}
        status={invalid ? "error" : ""}
        className={wrapper}
        size={"small"}
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
