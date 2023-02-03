import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib";

import { ColumnProps } from "../../../../features/components/common/Table";
import { cell } from "../../../../features/components/common/Table/table.module.scss";
import { Post } from "../../../api/types/entities";

export const getPostColumns = (posts: Post[]): ColumnProps[] => [
  getNumberCell(posts),

  {
    renderer: (rowIndex) => {
      return <Cell className={cell}>{posts[rowIndex].title}</Cell>;
    },

    name: "Название",
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
