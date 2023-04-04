import { SelectOption, Form, CreateTrailer, UpdateTrailer } from "@shared/misc";

export const create = (
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

export const update = (
  organizations: SelectOption[],
  departments: SelectOption[]
): Form<UpdateTrailer> => {
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
