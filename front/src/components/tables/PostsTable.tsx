import { Cell, TruncatedFormat2 } from "@blueprintjs/table";
import { observer } from "mobx-react-lite";

import { cell } from "../Table/table.module.scss";

import { Post } from "../../types/entities";
import { ColumnProps, Table } from "../Table";
import { PostsStore } from "../../stores/entities";

const PlansTable = () => {
  const posts = PostsStore.posts;

  const columns: ColumnProps[] = [
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

  return <Table<Post> items={posts} columns={columns} />;
};

export default observer(PlansTable);
