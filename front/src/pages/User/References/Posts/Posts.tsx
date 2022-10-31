import { observer } from "mobx-react-lite";

import { PostsTable } from "../../../../components/tables";
import PostsStore from "../../../../stores/entities/PostsStore";
import TableButtons from "../../../../components/common/TableButtons";

const Posts = () => {
  const posts = PostsStore.posts;

  return (
    <>
      <PostsTable posts={posts} />
      <TableButtons />
    </>
  );
};

export default observer(Posts);
