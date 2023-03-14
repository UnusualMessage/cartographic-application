import { toFixed } from "ol/math";

import { Column } from "../../../misc";
import Progress from "../../../ui/Progress";

export const planTable: Column[] = [
  {
    title: "Название",
    dataIndex: "title",
  },

  {
    title: "Год",
    dataIndex: "year",
  },

  {
    title: "Тип",
    dataIndex: "type",
  },

  {
    title: "Цель",
    dataIndex: "target",
    render: (target) => {
      return <Progress value={toFixed(+target / 100, 2)} />;
    },
  },
];
