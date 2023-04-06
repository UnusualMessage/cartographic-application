import {
  SelectOption,
  Form,
  CreateEquipmentType,
  UpdateEquipmentType,
} from "@shared/misc";

export const create = (
  organizations: SelectOption[],
  departments: SelectOption[]
): Form<CreateEquipmentType> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "name",
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
): Form<UpdateEquipmentType> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "name",
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
