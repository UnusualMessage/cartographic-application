import { Cell } from "@blueprintjs/table";
import { ColumnProps } from "@features/components/common/Table";

import { getNumberCell } from "@shared/lib";

import { cell } from "../../../../features/components/common/Table/table.module.scss";
import { Department } from "../../../api/types/entities";

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
