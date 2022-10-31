import { observer } from "mobx-react-lite";

import { PostsTable } from "../../../../components/tables";
import PostsStore from "../../../../stores/entities/PostsStore";

const Posts = () => {
  const posts = PostsStore.posts;

  return <PostsTable posts={posts} />;
};

export default observer(Posts);
