import { SelectOption, Form, CreateMounted, UpdateMounted } from "@shared/misc";

export const create = (departments: SelectOption[]): Form<CreateMounted> => {
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

export const update = (departments: SelectOption[]): Form<UpdateMounted> => {
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
