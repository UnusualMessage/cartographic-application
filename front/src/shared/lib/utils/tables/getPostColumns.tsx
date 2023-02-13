import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib/utils/tables/getNumberCell";
import { ColumnProps } from "@shared/ui/Table";

import { Post } from "../../../misc/types/entities";
import { cell } from "../../../ui/Table/table.module.scss";

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
