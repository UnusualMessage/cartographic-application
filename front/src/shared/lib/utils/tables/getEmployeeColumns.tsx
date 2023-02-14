import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib/utils/tables/getNumberCell";
import { ColumnProps } from "@shared/ui/Table";

import { Employee } from "../../../misc/types/entities";
import { cell } from "../../../styles";

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
