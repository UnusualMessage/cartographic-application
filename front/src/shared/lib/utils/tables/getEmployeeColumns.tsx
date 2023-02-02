import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { ColumnProps } from "../../../../features/common/Table";
import { cell } from "../../../../features/common/Table/table.module.scss";
import { Employee } from "../../../api/types/entities";
import getNumberCell from "./getNumberCell";

export const getEmployeeColumns = (employees: Employee[]): ColumnProps[] => [
  getNumberCell(employees),

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{employees[rowIndex].firstName}</Cell>;
    },

    name: "Имя",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{employees[rowIndex].secondName}</Cell>;
    },

    name: "Фамилия",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{employees[rowIndex].patronymic}</Cell>;
    },

    name: "Отчество",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{employees[rowIndex].phone}</Cell>;
    },

    name: "Телефон",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{employees[rowIndex].post.title}</Cell>;
    },

    name: "Должность",
  },

  {
    renderer: (rowIndex) => {
      return (
        <Cell className={cell}>
          <TruncatedFormat2 detectTruncation>
            {employees[rowIndex].organization.title}
          </TruncatedFormat2>
        </Cell>
      );
    },

    name: "Организация",
  },
];
