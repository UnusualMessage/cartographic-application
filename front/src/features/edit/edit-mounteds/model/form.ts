import { SelectOption, Form, CreateMounted, UpdateMounted } from "@shared/misc";

export const create = (
  organizations: SelectOption[],
  departments: SelectOption[]
): Form<CreateMounted> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "name",
    },

    {
      type: "numeric",
      rules: { required: "Заполните поле!" },
      label: "Ширина агрегата",
      name: "width",
    },

    {
      type: "numeric",
      label: "Смещение агрегата",
      name: "offset",
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
  organizations: SelectOption[],
  departments: SelectOption[]
): Form<UpdateMounted> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "name",
    },

    {
      type: "numeric",
      rules: { required: "Заполните поле!" },
      label: "Ширина агрегата",
      name: "width",
    },

    {
      type: "numeric",
      label: "Смещение агрегата",
      name: "offset",
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
