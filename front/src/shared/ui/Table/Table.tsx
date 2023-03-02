import { Table as AntTable } from "antd";
import classNames from "classnames";
import { Key } from "react";

import type { Column as ColumnProps } from "../../misc";
import { table, fill, width60 } from "../../styles";

interface Item {
  id: string;
}

interface Props<T> {
  width?: number;
  items: T[];
  columns: ColumnProps[];
  setItems?: (items: T[]) => void;
}

const Table = <T extends Item>({
  width,
  items,
  columns,
  setItems,
}: Props<T>) => {
  const classes = classNames({
    [table]: true,
    [fill]: width,
    [width60]: width === 60,
  });

  let rowSelection = undefined;

  if (setItems) {
    rowSelection = {
      onChange: (selectedRowKeys: Key[], selectedRows: T[]) => {
        setItems(selectedRows);
      },

      getCheckboxProps: (item: T) => ({
        id: item.id,
      }),
    };
  }

  return (
    <>
      <AntTable<T>
        className={classes}
        rowSelection={{
          type: rowSelection ? "radio" : undefined,
          onChange: rowSelection?.onChange,
          getCheckboxProps: rowSelection?.getCheckboxProps,
        }}
        columns={columns}
        dataSource={items}
        bordered
      />
    </>
  );
};

export default Table;
