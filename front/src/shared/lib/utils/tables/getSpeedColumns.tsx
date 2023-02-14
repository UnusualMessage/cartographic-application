import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib/utils/tables/getNumberCell";

import { Speed, Column } from "../../../misc";
import { cell } from "../../../styles";

export const getSpeedColumns = (speeds: Speed[]): Column[] => [
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
