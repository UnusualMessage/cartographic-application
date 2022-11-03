import { observer } from "mobx-react-lite";
import { Region } from "@blueprintjs/table";

import { PostsTable } from "../../../../components/tables";
import TableButtons from "../../../../components/auxiliary/TableButtons";
import { PostsStore } from "../../../../stores/entities";
import {
  CreatePost,
  DuplicatePost,
  RemovePost,
  UpdatePost,
} from "../../../../components/forms/post";

const Posts = () => {
  const post = PostsStore.post;
  const posts = PostsStore.posts;

  const onSelection = (regions: Region[]) => {
    const row = regions[0].rows;

    if (row) {
      PostsStore.post = posts[row[0]];
    }
  };

  return (
    <>
      <PostsTable posts={posts} onSelection={onSelection} />
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
