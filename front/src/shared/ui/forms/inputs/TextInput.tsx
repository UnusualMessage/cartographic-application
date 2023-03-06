import { FormGroup } from "@blueprintjs/core";
import { Input } from "antd";
import { Control, useController } from "react-hook-form";
import { v4 as uuid } from "uuid";

import { Rules } from "../../../misc";

interface Props {
  label: string;
  name: string;
  rules?: Rules;
  control: Control;
}

const TextInput = ({ label, name, control, rules }: Props) => {
  const { field, fieldState } = useController({
    control: control,
    name: name,
    rules: rules,
  });

  const id = uuid();

  const { invalid, error } = fieldState;

  return (
    <FormGroup
      label={label}
      labelFor={id}
      labelInfo={rules?.required ? "(обязательно для заполнения)" : undefined}
      intent={invalid ? "danger" : rules?.required ? "primary" : "none"}
      helperText={error?.message}
    >
      <Input
        id={id}
        placeholder={"Введите текст..."}
        status={invalid ? "error" : ""}
        {...field}
      />
    </FormGroup>
  );
};

export default TextInput;
