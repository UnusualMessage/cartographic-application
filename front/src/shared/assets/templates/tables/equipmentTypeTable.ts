import { Column, EquipmentType } from "../../../misc";

export const equipmentTypeTable: Column<EquipmentType>[] = [
  {
    title: "Название",
    dataIndex: "name",
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
