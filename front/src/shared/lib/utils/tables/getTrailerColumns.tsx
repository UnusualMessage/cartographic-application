import { Cell } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib";
import { ColumnProps } from "@shared/ui";

import { Trailer } from "../../../api/types/entities";
import { cell } from "../../../ui/Table/table.module.scss";

export const getTrailerColumns = (trailers: Trailer[]): ColumnProps[] => [
  getNumberCell(trailers),

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{trailers[rowIndex].title}</Cell>;
    },

    name: "Название",
  },

  {
    renderer: (rowIndex) => {
      return (
        <Cell className={cell}>{trailers[rowIndex].organization.title}</Cell>
      );
    },

    name: "Организация",
  },

  {
    renderer: (rowIndex) => {
      return (
        <Cell className={cell}>{trailers[rowIndex].department.title}</Cell>
      );
    },

    name: "Подразделение",
  },
];
