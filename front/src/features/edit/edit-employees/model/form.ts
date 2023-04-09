import { SelectOption, Form, CreateEmployee } from "@shared/misc";

export const form = (
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
