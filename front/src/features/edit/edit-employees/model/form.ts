import {
  SelectOption,
  Form,
  CreateEmployee,
  UpdateEmployee,
} from "@shared/misc";

export const create = (
  organizations: SelectOption[],
  departments: SelectOption[],
  posts: SelectOption[]
): Form<CreateEmployee> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Имя",
      name: "firstName",
    },

    {
      type: "text",
      label: "Фамилия",
      name: "secondName",
    },

    {
      type: "text",
      label: "Отчество",
      name: "patronymic",
    },

    {
      type: "select",
      rules: { required: "Заполните поле!" },
      label: "Должность",
      name: "postId",
      options: posts,
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

    {
      type: "text",
      label: "Номер телефона",
      name: "phone",
    },

    {
      type: "text",
      label: "Электронная почта",
      name: "email",
    },

    {
      type: "text",
      label: "№ водительского удостоверения",
      name: "driverCard",
    },
  ];
};

export const update = (
  organizations: SelectOption[],
  departments: SelectOption[],
  posts: SelectOption[]
): Form<UpdateEmployee> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Имя",
      name: "firstName",
    },

    {
      type: "text",
      label: "Фамилия",
      name: "secondName",
    },

    {
      type: "text",
      label: "Отчество",
      name: "patronymic",
    },

    {
      type: "select",
      rules: { required: "Заполните поле!" },
      label: "Должность",
      name: "postId",
      options: posts,
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

    {
      type: "text",
      label: "Номер телефона",
      name: "phone",
    },

    {
      type: "text",
      label: "Электронная почта",
      name: "email",
    },

    {
      type: "text",
      label: "№ водительского удостоверения",
      name: "driverCard",
    },
  ];
};
