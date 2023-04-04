import { SelectOption, Form, CreateSpeed, UpdateSpeed } from "@shared/misc";

export const create = (organizations: SelectOption[]): Form<CreateSpeed> => {
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
      rules: { required: "Заполните поле!" },
      label: "Организация",
      name: "organizationId",
      options: organizations,
    },
  ];
};

export const update = (organizations: SelectOption[]): Form<UpdateSpeed> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "title",
    },

    {
      type: "numeric",
      rules: { required: "Заполните поле!" },
      label: "Максимальная скорость, км/ч",
      name: "max",
    },

    {
      type: "numeric",
      rules: { required: "Заполните поле!" },
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
      rules: { required: "Заполните поле!" },
      label: "Организация",
      name: "organizationId",
      options: organizations,
    },
  ];
};
