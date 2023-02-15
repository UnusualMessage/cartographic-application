import { Cell } from "@blueprintjs/table";

import { getNumberCell } from "./getNumberCell";
import type { Trailer, Column } from "../../../misc";
import { cell } from "../../../styles";

export const getTrailerColumns = (trailers: Trailer[]): Column[] => [
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
