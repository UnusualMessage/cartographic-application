import { Column } from "../../../../misc";

export const getTrailerTable = (): Column[] => [
  {
    title: "Название",
    dataIndex: "title",
  },

  {
    title: "Организация",
    dataIndex: "organization",
  },

  {
    title: "Подразделение",
    dataIndex: "department",
  },
];
