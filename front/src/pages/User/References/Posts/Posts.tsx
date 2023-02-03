import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { getPostColumns, useRegions } from "@shared/lib";

import { PostsStore } from "../../../../entities/stores/entities";
import { Table } from "../../../../features/components/common/Table";
import {
  CreatePost,
  DuplicatePost,
  RemovePost,
  UpdatePost,
} from "../../../../features/components/forms/post";
import { Post } from "../../../../shared/api/types/entities";
import TableButtons from "../../../../shared/ui/TableButtons";

const Posts = () => {
  const post = PostsStore.post;
  const posts = PostsStore.posts;

  const { regions, onSelection } = useRegions((rowIndex: number) => {
    PostsStore.post = posts[rowIndex];
  });

  const columns = getPostColumns(posts);

  useEffect(() => {
    PostsStore.post = undefined;
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
