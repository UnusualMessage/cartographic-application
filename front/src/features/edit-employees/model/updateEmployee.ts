import { SelectOption, Form, UpdateEmployee } from "@shared/misc";

export const updateEmployee = (
  organizations: SelectOption[],
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
      type: "text",
      label: "Номер телефона",
      name: "phone",
    },

    {
      type: "text",
      label: "№ водительского удостоверения",
      name: "driverCard",
    },
  ];
};
