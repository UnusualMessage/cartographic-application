import { Column } from "../../../../misc";

export const getPostTable = (): Column[] => [
  {
    title: "Название",
    dataIndex: "title",
  },

  {
    title: "Организация",
    dataIndex: "organization",
  },
];
