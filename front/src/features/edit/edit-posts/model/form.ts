import { SelectOption, Form, CreatePost } from "@shared/misc";

export const form = (departments: SelectOption[]): Form<CreatePost> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "title",
    },

    {
      type: "select",
      label: "Организация",
      name: "organizationId",
      disabled: true,
      hidden: true,
    },

    {
      type: "select",
      label: "Подразделение",
      name: "departmentId",
      options: departments,
    },
  ];
};
