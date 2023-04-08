import { toFixed } from "ol/math";

import { Column, Plan } from "../../../misc";
import Progress from "../../../ui/Progress";

export const planTable: Column<Plan>[] = [
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
