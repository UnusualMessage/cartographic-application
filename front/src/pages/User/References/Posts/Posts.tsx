import { observer } from "mobx-react-lite";

import { PostsTable } from "../../../../components/tables";
import TableButtons from "../../../../components/common/TableButtons";
import { PostsStore } from "../../../../stores/entities";
import {
  CreatePost,
  DuplicatePost,
  RemovePost,
  UpdatePost,
} from "../../../../components/forms/post";

const Posts = () => {
  const posts = PostsStore.posts;

  return (
    <>
      <PostsTable posts={posts} />
      <TableButtons>
        <CreatePost />
        <UpdatePost />
        <DuplicatePost />
        <RemovePost />
      </TableButtons>
    </>
  );
};

export default observer(Posts);
