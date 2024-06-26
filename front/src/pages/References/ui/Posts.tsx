import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { PostsStore } from "@entities/business";
import {
  CreatePost,
  UpdatePost,
  DuplicatePost,
  RemovePost,
} from "@features/edit";
import { postTable } from "@shared/assets";
import { mapPostToTable } from "@shared/lib";
import { TablePost } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Posts = () => {
  const post = PostsStore.post;
  const posts = PostsStore.posts;

  const onSelection = async (posts: TablePost[]) => {
    await PostsStore.getById(posts[0].id);
  };

  useEffect(() => {
    PostsStore.post = undefined;
  }, []);

  return (
    <>
      <Table<TablePost>
        items={posts.map(mapPostToTable)}
        columns={postTable}
        setItems={onSelection}
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
