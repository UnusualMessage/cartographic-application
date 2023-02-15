import { Cell } from "@blueprintjs/table";

import { getNumberCell } from "./getNumberCell";
import type { Plan, Column } from "../../../misc";
import { cell } from "../../../styles";
import { Progress } from "../../../ui";

export const getPlanColumns = (plans: Plan[]): Column[] => [
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
