import { Column, Department } from "../../../misc";

export const departmentTable: Column<Department>[] = [
  {
    title: "Название",
    dataIndex: "title",
  },

  {
    title: "Организация",
    dataIndex: "organization",
  },
];
