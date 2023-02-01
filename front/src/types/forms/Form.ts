import { Path } from "react-hook-form";

import { SelectOption } from "./SelectOption";

export type InputType = "text" | "select" | "numeric";

interface Field<T> {
  type: InputType;
  required?: string | boolean;
  label: string;
  name: Path<T>;
  options?: SelectOption[];
}

export type Form<T> = Field<T>[];
