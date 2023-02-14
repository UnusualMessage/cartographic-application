import { Cell } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib/utils/tables/getNumberCell";

import { Department, Column } from "../../../misc";
import { cell } from "../../../styles";

export const getDepartmentColumns = (departments: Department[]): Column[] => [
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
