import {
  SelectOption,
  Form,
  CreateDepartment,
  UpdateDepartment,
} from "@shared/misc";

export const create = (options: SelectOption[]): Form<CreateDepartment> => {
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

export const update = (options: SelectOption[]): Form<UpdateDepartment> => {
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
