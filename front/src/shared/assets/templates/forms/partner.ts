import {
  CreatePartner,
  UpdatePartner,
} from "../../../../types/entities/Partner";
import { Form, SelectOption } from "../../../../types/forms";

export const createPartner = (
  organizations: SelectOption[]
): Form<CreatePartner> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "text",
      required: false,
      label: "Юридический адрес",
      name: "address",
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
      label: "ИНН",
      name: "inn",
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

export const updatePartner = (
  organizations: SelectOption[]
): Form<UpdatePartner> => {
  return [
    {
      type: "text",
      required: "Заполните поле!",
      label: "Название",
      name: "title",
    },

    {
      type: "text",
      required: false,
      label: "Юридический адрес",
      name: "address",
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
      label: "ИНН",
      name: "inn",
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
