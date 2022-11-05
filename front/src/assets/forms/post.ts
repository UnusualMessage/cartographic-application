import { CreatePost, UpdatePost } from "../../types/entities/Post";
import { Form, SelectOption } from "../../types/forms";

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
