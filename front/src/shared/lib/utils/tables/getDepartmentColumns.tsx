import { Cell } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib";
import { ColumnProps } from "@shared/ui";

import { Department } from "../../../api/types/entities";
import { cell } from "../../../ui/Table/table.module.scss";

export const getDepartmentColumns = (
  departments: Department[]
): ColumnProps[] => [
  getNumberCell(departments),

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{departments[rowIndex].title}</Cell>;
    },

    name: "Название",
  },

  {
    renderer: (rowIndex) => {
      return (
        <Cell className={cell}>{departments[rowIndex].organization.title}</Cell>
      );
    },

    name: "Организация",
  },
];
