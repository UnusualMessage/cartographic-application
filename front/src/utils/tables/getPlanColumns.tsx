import { Cell } from "@blueprintjs/table";

import { cell } from "../../components/common/Table/table.module.scss";

import { ColumnProps } from "../../components/common/Table";
import { Plan } from "../../types/entities";

export const getPlanColumns = (plans: Plan[]): ColumnProps[] => [
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
];
