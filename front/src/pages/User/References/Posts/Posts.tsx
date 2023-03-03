import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  PostsStore,
  CreatePost,
  UpdatePost,
  DuplicatePost,
  RemovePost,
} from "@entities/post";
import { mapPostToTable, getPostTable } from "@shared/lib";
import { TablePartner, TablePost } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Posts = () => {
  const post = PostsStore.post;
  const posts = PostsStore.posts;

  const columns = getPostTable();

  const onSelection = async (posts: TablePost[]) => {
    PostsStore.post = await PostsStore.getById(posts[0].id);
  };

  useEffect(() => {
    PostsStore.post = undefined;
  }, []);

  return (
    <>
      <Table<TablePartner>
        items={posts.map(mapPostToTable)}
        columns={columns}
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
