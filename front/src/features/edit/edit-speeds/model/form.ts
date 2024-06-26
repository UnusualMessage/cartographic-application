import { SelectOption, Form, CreateSpeed } from "@shared/misc";

export const form = (departments: SelectOption[]): Form<CreateSpeed> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "title",
    },

    {
      type: "numeric",
      rules: {
        required: "Заполните поле!",
        min: { value: 0, message: "Скорость > 0" },
      },
      label: "Максимальная скорость, км/ч",
      name: "max",
    },

    {
      type: "numeric",
      rules: {
        required: "Заполните поле!",
        min: { value: 0, message: "Скорость > 0" },
      },
      label: "Минимальная скорость, км/ч",
      name: "min",
    },

    {
      type: "numeric",
      rules: { required: "Заполните поле!" },
      label: "Допустимое время",
      name: "timeLimit",
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
