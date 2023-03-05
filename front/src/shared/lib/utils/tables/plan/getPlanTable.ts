import { Column } from "../../../../misc";

export const getPlanTable = (): Column[] => [
  {
    title: "Название",
    dataIndex: "title",
  },

  {
    title: "Год",
    dataIndex: "year",
  },

  {
    title: "Тип",
    dataIndex: "type",
  },

  {
    title: "Цель",
    dataIndex: "target",
  },
];
