import { SelectOption, Form, CreatePost } from "@shared/misc";

export const createPost = (options: SelectOption[]): Form<CreatePost> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "title",
    },

    {
      type: "select",
      rules: { required: "Заполните поле!" },
      label: "Организация",
      name: "organizationId",
      options: options,
    },
  ];
};
