import { Cell } from "@blueprintjs/table";

import { cell } from "../common/Table/table.module.scss";

import { Plan } from "../../types/entities";
import { ColumnProps, Table } from "../common/Table";

interface Props {
  width?: number;
  plans: Plan[];
}

const PlansTable = ({ plans, width }: Props) => {
  const columns: ColumnProps[] = [
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

  return <Table<Plan> items={plans} columns={columns} width={width} />;
};

export default PlansTable;
