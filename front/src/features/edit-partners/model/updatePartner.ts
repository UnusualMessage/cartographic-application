import { SelectOption, Form, UpdatePartner } from "@shared/misc";

export const updatePartner = (
  organizations: SelectOption[]
): Form<UpdatePartner> => {
  return [
    {
      type: "text",
      rules: { required: "Заполните поле!" },
      label: "Название",
      name: "title",
    },

    {
      type: "text",
      label: "Юридический адрес",
      name: "address",
    },

    {
      type: "text",
      label: "Номер телефона",
      name: "phone",
    },

    {
      type: "text",
      label: "ИНН",
      name: "inn",
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
