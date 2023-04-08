import { SelectOption, Form, CreateTrailer } from "@shared/misc";

export const form = (departments: SelectOption[]): Form<CreateTrailer> => {
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

    {
      type: "select",
      label: "Подразделение",
      name: "departmentId",
      options: departments,
    },
  ];
};
