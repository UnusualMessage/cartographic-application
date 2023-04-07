import { SelectOption, Form, CreateEquipment } from "@shared/misc";

export const form = (
  departments: SelectOption[],
  types: SelectOption[]
): Form<CreateEquipment> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "name",
    },

    {
      type: "select",
      label: "Тип",
      name: "typeId",
      options: types,
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
