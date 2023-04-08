import { Column, Speed } from "../../../misc";

export const speedTable: Column<Speed>[] = [
  {
    title: "Название",
    dataIndex: "title",
  },

  {
    title: "Минимальная скорость, км/ч",
    dataIndex: "min",
  },

  {
    title: "Максимальная скорость, км/ч",
    dataIndex: "max",
  },

  {
    title: "Предел времени, с",
    dataIndex: "timeLimit",
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
