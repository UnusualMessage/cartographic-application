import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { getNumberCell } from "./getNumberCell";
import type { Column, Partner } from "../../../misc";
import { cell } from "../../../styles";

export const getPartnerColumns = (partners: Partner[]): Column[] => [
  getNumberCell(partners),

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{partners[rowIndex].title}</Cell>;
    },

    name: "Название",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{partners[rowIndex].address}</Cell>;
    },

    name: "Юридический адрес",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{partners[rowIndex].inn}</Cell>;
    },

    name: "ИНН",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{partners[rowIndex].phone}</Cell>;
    },

    name: "Телефон",
  },

  {
    renderer: (rowIndex) => {
      return (
        <Cell className={cell}>
          <TruncatedFormat2 detectTruncation>
            {partners[rowIndex].organization.title}
          </TruncatedFormat2>
        </Cell>
      );
    },

    name: "Организация",
  },
];