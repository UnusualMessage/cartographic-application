import { Path } from "react-hook-form";

import { Input } from "./Input";
import { SelectOption } from "./option";
import { Rules } from "./Rules";

export interface Field<T> {
  type: Input;
  rules?: Rules;
  hidden?: boolean;
  disabled?: boolean;
  label: string;
  name: Path<T>;
  options?: SelectOption[];
}
