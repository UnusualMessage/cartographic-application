import { SelectOption, Form, CreatePost, UpdatePost } from "@shared/misc";

export const create = (
  organizations: SelectOption[],
  departments: SelectOption[]
): Form<CreatePost> => {
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
      options: organizations,
    },

    {
      type: "select",
      label: "Подразделение",
      name: "departmentId",
      options: departments,
    },
  ];
};

export const update = (
  options: SelectOption[],
  departments: SelectOption[]
): Form<UpdatePost> => {
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

    {
      type: "select",
      label: "Подразделение",
      name: "departmentId",
      options: departments,
    },
  ];
};
