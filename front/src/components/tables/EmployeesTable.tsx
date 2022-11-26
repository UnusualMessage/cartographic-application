import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { cell } from "../common/Table/table.module.scss";

import { Employee } from "../../types/entities";
import { ColumnProps, OnSelection, Table } from "../common/Table";

interface Props {
  width?: number;
  employees: Employee[];
  onSelection?: OnSelection;
}

const EmployeesTable = ({ employees, onSelection, width }: Props) => {
  const columns: ColumnProps[] = [
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

  return (
    <Table<Employee>
      width={width}
      items={employees}
      columns={columns}
      onSelection={onSelection}
    />
  );
};

export default EmployeesTable;
