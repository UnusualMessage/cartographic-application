import { Table as AntTable } from "antd";
import classNames from "classnames";
import { Key } from "react";

import type { Column as ColumnProps } from "../../misc";
import { table } from "../../styles";

interface Item {
  id: string;
}

interface Props<T> {
  items: T[];
  columns: ColumnProps[];
  setItems?: (items: T[]) => void;
  className?: string;
}

const Table = <T extends Item>({
  items,
  columns,
  setItems,
  className,
}: Props<T>) => {
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
    <AntTable<T>
      className={classNames(className, table)}
      rowSelection={
        rowSelection
          ? {
              type: "radio",
              onChange: rowSelection.onChange,
              getCheckboxProps: rowSelection.getCheckboxProps,
            }
          : undefined
      }
      columns={columns}
      dataSource={items}
      bordered
      pagination={{ position: ["bottomLeft"], pageSize: 50 }}
    />
  );
};

export default Table;
