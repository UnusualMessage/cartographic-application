import { Cell } from "@blueprintjs/table";

import { cell } from "../../../../features/components/common/Table/table.module.scss";

import { ColumnProps } from "../../../../features/components/common/Table";
import { Plan } from "../../../api/types/entities";
import getNumberCell from "./getNumberCell";
import Progress from "../../../../features/components/auxiliary/Progress";

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
