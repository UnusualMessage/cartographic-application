import { Form, InputNumber } from "antd";
import { Control, useController } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { wrapper } from "./input.module.scss";
import { Rules } from "../../../misc";

interface Props {
  label: string;
  name: string;
  disabled?: boolean;
  rules?: Rules;
  control: Control;
}

const NumberInput = ({ label, disabled, rules, name, control }: Props) => {
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
      <InputNumber
        id={id}
        disabled={disabled}
        placeholder={"Введите число..."}
        status={invalid ? "error" : ""}
        className={wrapper}
        size={"small"}
        {...field}
      />
    </Form.Item>
  );
};

export default NumberInput;
