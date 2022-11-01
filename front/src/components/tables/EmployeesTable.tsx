import { Cell, TruncatedFormat2 } from "@blueprintjs/table";
import { observer } from "mobx-react-lite";

import { cell } from "../Table/table.module.scss";

import { Employee } from "../../types/entities";
import Table, { ColumnProps } from "../Table/Table";
import { EmployeesStore } from "../../stores/entities";

const EmployeesTable = () => {
  const employees = EmployeesStore.employees;

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

  return <Table<Employee> items={employees} columns={columns} />;
};

export default observer(EmployeesTable);
