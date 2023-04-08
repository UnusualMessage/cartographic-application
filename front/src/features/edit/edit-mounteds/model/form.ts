import { SelectOption, Form, CreateMounted } from "@shared/misc";

export const form = (departments: SelectOption[]): Form<CreateMounted> => {
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
