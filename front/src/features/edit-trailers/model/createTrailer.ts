import { SelectOption, Form, CreateTrailer } from "@shared/misc";

export const createTrailer = (
  organizations: SelectOption[],
  departments: SelectOption[]
): Form<CreateTrailer> => {
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
      rules: { required: "Заполните поле!" },
      label: "Подразделение",
      name: "departmentId",
      options: departments,
    },
  ];
};
