import { Form, SelectOption } from "../../types/forms";
import { CreateSpeed, UpdateSpeed } from "../../types/entities/Speed";

export const createSpeed = (
  organizations: SelectOption[]
): Form<CreateSpeed> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "numeric",
      required: "Заполните поле!",
      label: "Максимальная скорость, км/ч",
      name: "max",
    },

    {
      type: "numeric",
      required: "Заполните поле!",
      label: "Минимальная скорость, км/ч",
      name: "min",
    },

    {
      type: "numeric",
      required: "Заполните поле!",
      label: "Допустимое время",
      name: "timeLimit",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: organizations,
    },
  ];
};

export const updateSpeed = (
  organizations: SelectOption[]
): Form<UpdateSpeed> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "numeric",
      required: "Заполните поле!",
      label: "Максимальная скорость, км/ч",
      name: "max",
    },

    {
      type: "numeric",
      required: "Заполните поле!",
      label: "Минимальная скорость, км/ч",
      name: "min",
    },

    {
      type: "numeric",
      required: "Заполните поле!",
      label: "Допустимое время",
      name: "timeLimit",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: organizations,
    },
  ];
};
