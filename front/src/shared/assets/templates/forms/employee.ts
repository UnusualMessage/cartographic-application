import { Form, SelectOption } from "@shared/misc/types/form";

import { CreateEmployee, UpdateEmployee } from "../../../misc";

export const createEmployee = (
  organizations: SelectOption[],
  posts: SelectOption[]
): Form<CreateEmployee> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Имя",
      name: "firstName",
    },

    {
      type: "text",
      required: false,
      label: "Фамилия",
      name: "secondName",
    },

    {
      type: "text",
      required: false,
      label: "Отчество",
      name: "patronymic",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Должность",
      name: "postId",
      options: posts,
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: organizations,
    },

    {
      type: "text",
      required: false,
      label: "Номер телефона",
      name: "phone",
    },

    {
      type: "text",
      required: false,
      label: "№ водительского удостоверения",
      name: "driverCard",
    },
  ];
};

export const updateEmployee = (
  organizations: SelectOption[],
  posts: SelectOption[]
): Form<UpdateEmployee> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Имя",
      name: "firstName",
    },

    {
      type: "text",
      required: false,
      label: "Фамилия",
      name: "secondName",
    },

    {
      type: "text",
      required: false,
      label: "Отчество",
      name: "patronymic",
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Должность",
      name: "postId",
      options: posts,
    },

    {
      type: "select",
      required: "Заполните поле!",
      label: "Организация",
      name: "organizationId",
      options: organizations,
    },

    {
      type: "text",
      required: false,
      label: "Номер телефона",
      name: "phone",
    },

    {
      type: "text",
      required: false,
      label: "№ водительского удостоверения",
      name: "driverCard",
    },
  ];
};
