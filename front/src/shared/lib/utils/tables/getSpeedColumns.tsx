import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib/utils/tables/getNumberCell";
import { ColumnProps } from "@shared/ui/Table";

import { Speed } from "../../../api/types/entities";
import { cell } from "../../../ui/Table/table.module.scss";

export const getSpeedColumns = (speeds: Speed[]): ColumnProps[] => [
  getNumberCell(speeds),

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
