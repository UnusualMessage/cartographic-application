import { Cell } from "@blueprintjs/table";

import { Trailer } from "../../../api/types/entities";
import { ColumnProps } from "../../../ui/Table";
import { cell } from "../../../ui/Table/table.module.scss";
import getNumberCell from "./getNumberCell";

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
