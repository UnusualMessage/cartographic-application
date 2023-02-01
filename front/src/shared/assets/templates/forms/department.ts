import {
  CreateDepartment,
  UpdateDepartment,
} from "../../../api/types/entities/Department";
import { Form, SelectOption } from "../../../api/types/forms";

export const createDepartment = (
  options: SelectOption[]
): Form<CreateDepartment> => {
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
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: options,
    },
  ];
};
