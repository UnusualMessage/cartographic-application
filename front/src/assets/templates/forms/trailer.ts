import { CreateTrailer, UpdateTrailer } from "../../../types/entities/Trailer";
import { Form, SelectOption } from "../../../types/forms";

export const createTrailer = (
  organizations: SelectOption[],
  departments: SelectOption[]
): Form<CreateTrailer> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: organizations,
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Подразделение",
      name: "departmentId",
      options: departments,
    },
  ];
};

export const updateTrailer = (
  organizations: SelectOption[],
  departments: SelectOption[]
): Form<UpdateTrailer> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: organizations,
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Подразделение",
      name: "departmentId",
      options: departments,
    },
  ];
};
