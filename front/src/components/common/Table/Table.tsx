import {
  CellRenderer,
  Column,
  Region,
  RowHeaderCell2,
  RowHeaderRenderer,
  Table2,
} from "@blueprintjs/table";

import { cell, wrapper } from "./table.module.scss";

export type OnSelection = (selectedRegions: Region[]) => void;

export interface ColumnProps {
  renderer: CellRenderer;
  name: string;
}

interface Props<T> {
  items: T[];
  columns: ColumnProps[];
  onSelection?: OnSelection;
}

const Table = <T,>({ items, columns, onSelection }: Props<T>) => {
  const rowHeaderRenderer: RowHeaderRenderer = (rowIndex) => {
    return (
      <RowHeaderCell2
        index={rowIndex}
        name={(rowIndex + 1).toString()}
        className={cell}
      />
    );
  };

  return (
    <>
      <Table2
        numRows={items.length}
        className={wrapper}
        cellRendererDependencies={[items]}
        rowHeaderCellRenderer={rowHeaderRenderer}
        onSelection={onSelection}
        defaultRowHeight={40}
        enableMultipleSelection={false}
        enableColumnResizing={false}
      >
        {columns.map((column) => {
          return (
            <Column
              cellRenderer={column.renderer}
              name={column.name}
              key={`table-${column.name}`}
            />
          );
        })}
      </Table2>
    </>
  );
};

export default Table;
