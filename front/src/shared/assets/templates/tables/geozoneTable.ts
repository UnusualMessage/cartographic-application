import { Column, Geozone } from "../../../misc";

export const geozoneTable: Column<Geozone>[] = [
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
