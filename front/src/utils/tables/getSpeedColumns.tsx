import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { cell } from "../../components/common/Table/table.module.scss";

import { ColumnProps } from "../../components/common/Table";
import { Speed } from "../../types/entities";

export const getSpeedColumns = (speeds: Speed[]): ColumnProps[] => [
  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{speeds[rowIndex].title}</Cell>;
    },

    name: "Название",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{speeds[rowIndex].min}</Cell>;
    },

    name: "Минимальная скорость, км/ч",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{speeds[rowIndex].max}</Cell>;
    },

    name: "Максимальная скорост, км/ч",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{speeds[rowIndex].timeLimit}</Cell>;
    },

    name: "Предел времени, с",
  },

  {
    renderer: (rowIndex) => {
      return (
        <Cell className={cell}>
          <TruncatedFormat2 detectTruncation>
            {speeds[rowIndex].organization.title}
          </TruncatedFormat2>
        </Cell>
      );
    },

    name: "Организация",
  },
];
