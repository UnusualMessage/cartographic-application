import { Column, Post } from "../../../misc";

export const postTable: Column<Post>[] = [
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
