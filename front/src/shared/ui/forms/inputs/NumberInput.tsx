import { Form, InputNumber } from "antd";
import { Control, useController } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { Rules } from "../../../misc";

interface Props {
  label: string;
  name: string;
  rules?: Rules;
  control: Control;
}

const NumberInput = ({ label, rules, name, control }: Props) => {
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
        placeholder={"Введите число..."}
        status={invalid ? "error" : ""}
        style={{ width: "100%" }}
        {...field}
      />
    </Form.Item>
  );
};

export default NumberInput;
