import { Cell } from "@blueprintjs/table";

import { cell } from "../../../../components/common/Table/table.module.scss";

import { fromUuidToNumber } from "../format";

interface Entity {
  id: string;
}

export const getNumberCell = (entities: Entity[]) => {
  return {
    renderer: (rowIndex: number) => {
      return (
        <Cell className={cell}>{fromUuidToNumber(entities[rowIndex].id)}</Cell>
      );
    },

    name: "Номер",
  };
};

export default getNumberCell;
