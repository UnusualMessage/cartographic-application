import { Path } from "react-hook-form";

import { Input } from "./Input";
import { SelectOption } from "./option";

export interface Field<T> {
  type: Input;
  required?: string | boolean;
  label: string;
  name: Path<T>;
  options?: SelectOption[];
}
