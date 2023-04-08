import type { Column, Equipment } from "../../../misc";

export const equipmentTable: Column<Equipment>[] = [
  {
    title: "Название",
    dataIndex: "name",
  },

  {
    title: "Тип",
    dataIndex: "type",
  },

  {
    title: "Статус",
    dataIndex: "status",
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
