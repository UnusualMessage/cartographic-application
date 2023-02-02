import { Cell } from "@blueprintjs/table";

import Progress from "../../components/auxiliary/Progress";
import { ColumnProps } from "../../components/common/Table";
import { cell } from "../../components/common/Table/table.module.scss";
import { Plan } from "../../types/entities";
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
