import { CreatePost, UpdatePost } from "@shared/api/types/entities/Post";
import { Form, SelectOption } from "@shared/api/types/forms";

export const createPost = (options: SelectOption[]): Form<CreatePost> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
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
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: options,
    },
  ];
};
