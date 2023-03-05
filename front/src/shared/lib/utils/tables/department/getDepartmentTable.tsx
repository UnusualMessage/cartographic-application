import type { Column } from "../../../../misc";

export const getDepartmentTable = (): Column[] => [
  {
    title: "Название",
    dataIndex: "title",
  },

  {
    title: "Организация",
    dataIndex: "organization",
  },
];
