import { Column } from "../../../../misc";

export const getPartnerTable = (): Column[] => [
  {
    title: "Название",
    dataIndex: "title",
  },

  {
    title: "Организация",
    dataIndex: "organization",
  },

  {
    title: "Телефон",
    dataIndex: "phone",
  },

  {
    title: "Адрес",
    dataIndex: "address",
  },

  {
    title: "ИНН",
    dataIndex: "inn",
  },
];
