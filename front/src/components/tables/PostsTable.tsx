import {
  Cell,
  CellRenderer,
  Column,
  RowHeaderCell2,
  RowHeaderRenderer,
  Table2,
} from "@blueprintjs/table";

import { cell, table } from "./table.module.scss";
import { Post } from "../../types/entities";

interface Props {
  posts: Post[];
}

const PostsTable = ({ posts }: Props) => {
  const titleRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{posts[rowIndex].title}</Cell>;
  };

  const numberRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{posts[rowIndex].number}</Cell>;
  };

  const organizationRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{posts[rowIndex].organization.title}</Cell>;
  };

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
    <Table2
      numRows={posts.length}
      className={table}
      cellRendererDependencies={[posts]}
      defaultRowHeight={40}
      columnWidths={[500, 500, 500]}
      enableColumnResizing={false}
      rowHeaderCellRenderer={rowHeaderRenderer}
    >
      <Column cellRenderer={titleRenderer} name={"Должность"} />
      <Column cellRenderer={numberRenderer} name={"Номер"} />
      <Column cellRenderer={organizationRenderer} name={"Организация"} />
    </Table2>
  );
};

export default PostsTable;
