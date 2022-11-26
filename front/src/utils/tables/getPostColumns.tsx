import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { cell } from "../../components/common/Table/table.module.scss";

import { ColumnProps } from "../../components/common/Table";
import { Post } from "../../types/entities";

export const getPostColumns = (posts: Post[]): ColumnProps[] => [
  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{posts[rowIndex].title}</Cell>;
    },

    name: "Название",
  },

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{posts[rowIndex].number}</Cell>;
    },

    name: "Номер",
  },

  {
    renderer: (rowIndex) => {
      return (
        <Cell className={cell}>
          <TruncatedFormat2 detectTruncation>
            {posts[rowIndex].organization.title}
          </TruncatedFormat2>
        </Cell>
      );
    },

    name: "Организация",
  },
];
