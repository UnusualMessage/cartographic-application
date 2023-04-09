import { Table as AntTable } from "antd";
import classNames from "classnames";
import { Key } from "react";

import { wrapper } from "./table.module.scss";
import type { Column, TableItem } from "../../misc";

interface Props<T> {
  items: T[];
  columns: Column<any>[];
  setItems?: (items: T[]) => void;
  className?: string;
}

const Table = <T extends TableItem>({
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
      className={classNames(className, wrapper)}
      size={"small"}
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
      pagination={false}
    />
  );
};

export default Table;
