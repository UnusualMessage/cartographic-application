import { Form, CreateDepartment } from "@shared/misc";

export const form = (): Form<CreateDepartment> => {
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
      hidden: true,
      disabled: true,
    },
  ];
};
