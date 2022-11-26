import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Region, Regions } from "@blueprintjs/table";

import TableButtons from "../../../../components/auxiliary/TableButtons";
import { PostsStore } from "../../../../stores/entities";
import {
  CreatePost,
  DuplicatePost,
  RemovePost,
  UpdatePost,
} from "../../../../components/forms/post";
import { Table } from "../../../../components/common/Table";
import { Post } from "../../../../types/entities";
import { getPostColumns } from "../../../../utils/tables";

const Posts = () => {
  const [regions, setRegions] = useState<Region[]>([]);

  const post = PostsStore.post;
  const posts = PostsStore.posts;

  const onSelection = (regions: Region[]) => {
    const row = regions[0].rows;

    if (row) {
      const rowIndex = row[0];
      const region = Regions.row(rowIndex);

      setRegions([region]);
      PostsStore.post = posts[rowIndex];
    }
  };

  const columns = getPostColumns(posts);

  useEffect(() => {
    PostsStore.post = undefined;
    setRegions([]);
  }, []);

  return (
    <>
      <Table<Post>
        items={posts}
        onSelection={onSelection}
        regions={regions}
        columns={columns}
      />
      <TableButtons>
        <CreatePost />
        <UpdatePost id={post?.id} />
        <DuplicatePost id={post?.id} />
        <RemovePost id={post?.id} />
      </TableButtons>
    </>
  );
};

export default observer(Posts);
