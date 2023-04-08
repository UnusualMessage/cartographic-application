import { Column, Mounted } from "../../../misc";

export const mountedTable: Column<Mounted>[] = [
  {
    title: "Название",
    dataIndex: "name",
  },

  {
    title: "Ширина",
    dataIndex: "width",
  },

  {
    title: "Смещение",
    dataIndex: "offset",
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
