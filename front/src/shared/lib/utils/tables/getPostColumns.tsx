import { Cell, TruncatedFormat2 } from "@blueprintjs/table";

import { getNumberCell } from "@shared/lib/utils/tables/getNumberCell";

import { Post, Column } from "../../../misc";
import { cell } from "../../../styles";

export const getPostColumns = (posts: Post[]): Column[] => [
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
