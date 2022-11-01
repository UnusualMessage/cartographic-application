import {
  CellRenderer,
  Column,
  RowHeaderCell2,
  RowHeaderRenderer,
  Table2,
} from "@blueprintjs/table";

import { cell, wrapper } from "./table.module.scss";

import TableButtons from "../common/TableButtons";

export interface ColumnProps {
  renderer: CellRenderer;
  name: string;
}

interface Props<T> {
  items: T[];
  columns: ColumnProps[];
}

const Table = <T,>({ items, columns }: Props<T>) => {
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
        defaultRowHeight={40}
        enableColumnResizing={false}
        rowHeaderCellRenderer={rowHeaderRenderer}
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
      <TableButtons />
    </>
  );
};

export default Table;
