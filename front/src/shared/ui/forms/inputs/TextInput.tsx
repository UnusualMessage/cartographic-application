import { Form, Input } from "antd";
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

const TextInput = ({ label, disabled, name, control, rules }: Props) => {
  const { field, fieldState } = useController({
    control: control,
    name: name,
    rules: rules,
  });

  const id = uuid();

  const { invalid, error } = fieldState;

  return (
    <Form.Item
      label={label}
      htmlFor={id}
      help={error?.message}
      validateStatus={invalid ? "error" : ""}
      required={!!rules?.required}
    >
      <Input
        id={id}
        disabled={disabled}
        placeholder={"Введите текст..."}
        status={invalid ? "error" : ""}
        className={wrapper}
        size={"small"}
        {...field}
      />
    </Form.Item>
  );
};

export default TextInput;
