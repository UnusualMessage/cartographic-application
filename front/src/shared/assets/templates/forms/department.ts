import type {
  UpdateDepartment,
  CreateDepartment,
  SelectOption,
  Form,
} from "../../../misc";

export const createDepartment = (
  options: SelectOption[]
): Form<CreateDepartment> => {
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

export const updateDepartment = (
  options: SelectOption[]
): Form<UpdateDepartment> => {
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
