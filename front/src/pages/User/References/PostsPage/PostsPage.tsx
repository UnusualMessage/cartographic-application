import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import {
  PostsStore,
  CreatePost,
  UpdatePost,
  DuplicatePost,
  RemovePost,
} from "@entities/post";
import { useRegions, getPostColumns } from "@shared/lib";
import { Post } from "@shared/misc";
import { Table, TableButtons } from "@shared/ui";

const PostsPage = () => {
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

export default observer(PostsPage);
