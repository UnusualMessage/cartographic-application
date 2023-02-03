import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib";

import { ColumnProps } from "../../../../features/components/common/Table";
import { cell } from "../../../../features/components/common/Table/table.module.scss";
import Partner from "../../../api/types/entities/Partner";

export const getPartnerColumns = (partners: Partner[]): ColumnProps[] => [
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
