import { FormGroup } from "@blueprintjs/core";
import { InputNumber } from "antd";
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
    <FormGroup
      label={label}
      labelFor={id}
      labelInfo={rules?.required ? "(обязательно для заполнения)" : undefined}
      intent={invalid ? "danger" : rules?.required ? "primary" : "none"}
      helperText={error ? error.message : undefined}
    >
      <InputNumber
        id={id}
        placeholder={"Введите число..."}
        status={invalid ? "error" : ""}
        {...field}
      />
    </FormGroup>
  );
};

export default NumberInput;
