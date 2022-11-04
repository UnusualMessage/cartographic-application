import { Path } from "react-hook-form";

import { CreatePost, UpdatePost } from "../../types/entities/Post";
import { SelectOption } from "../../types/common";

export type InputType = "text" | "select";

interface Field<T> {
  type: InputType;
  required?: string | boolean;
  label: string;
  name: Path<T>;
  options?: SelectOption[];
}

export type Form<T> = Field<T>[];

export const createPost = (options: SelectOption[]): Form<CreatePost> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "text",
      required: false,
      label: "Номер",
      name: "number",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: options,
    },
  ];
};

export const updatePost = (options: SelectOption[]): Form<UpdatePost> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "text",
      required: false,
      label: "Номер",
      name: "number",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: options,
    },
  ];
};
