import { Cell } from "@blueprintjs/table";

import { Plan } from "../../../api/types/entities";
import Progress from "../../../ui/Progress";
import { ColumnProps } from "../../../ui/Table";
import { cell } from "../../../ui/Table/table.module.scss";
import getNumberCell from "./getNumberCell";

export const getPlanColumns = (plans: Plan[]): ColumnProps[] => [
  getNumberCell(plans),

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{plans[rowIndex].type}</Cell>;
    },

    name: "Тип",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{plans[rowIndex].target}</Cell>;
    },

    name: "Цель",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{plans[rowIndex].year}</Cell>;
    },

    name: "Год",
  },

  {
    renderer: (rowIndex) => {
      return (
        <Cell className={cell}>{<Progress value={rowIndex * 0.1} />}</Cell>
      );
    },

    name: "Прогресс",
  },
];
