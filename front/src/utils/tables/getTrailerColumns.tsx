import { Cell } from "@blueprintjs/table";

import { cell } from "../../components/common/Table/table.module.scss";

import { Trailer } from "../../types/entities";
import { ColumnProps } from "../../components/common/Table";

export const getTrailerColumns = (trailers: Trailer[]): ColumnProps[] => [
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
