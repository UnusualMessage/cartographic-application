import {
  Column,
  Region,
  RowHeaderCell2,
  RowHeaderRenderer,
  Table2,
} from "@blueprintjs/table";
import classNames from "classnames";

import type { Column as ColumnProps, OnSelection } from "../../misc";
import { table, cell, fill, width60 } from "../../styles";

interface Props<T> {
  width?: number;
  items: T[];
  columns: ColumnProps[];
  onSelection?: OnSelection;
  regions?: Region[];
}

const Table = <T,>({
  width,
  items,
  columns,
  onSelection,
  regions,
}: Props<T>) => {
  const rowHeaderRenderer: RowHeaderRenderer = (rowIndex) => {
    return (
      <RowHeaderCell2
        index={rowIndex}
        name={(rowIndex + 1).toString()}
        className={cell}
      />
    );
  };

  const classes = classNames({
    [table]: true,
    [fill]: width,
    [width60]: width === 60,
  });

  return (
    <>
      <Table2
        numRows={items.length}
        className={classes}
        cellRendererDependencies={[items]}
        rowHeaderCellRenderer={rowHeaderRenderer}
        onSelection={onSelection}
        defaultRowHeight={40}
        enableMultipleSelection={false}
        selectedRegions={regions}
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
