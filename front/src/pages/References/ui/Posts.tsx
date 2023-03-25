import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { PostsStore } from "@entities/post";
import {
  CreatePost,
  UpdatePost,
  DuplicatePost,
  RemovePost,
} from "@features/edit-posts";
import { postTable } from "@shared/assets";
import { mapPostToTable } from "@shared/lib";
import { TablePartner, TablePost } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const Posts = () => {
  const post = PostsStore.post;
  const posts = PostsStore.posts;

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
