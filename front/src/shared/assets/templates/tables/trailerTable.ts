import { Column, Trailer } from "../../../misc";

export const trailerTable: Column<Trailer>[] = [
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
