import { observer } from "mobx-react-lite";
import { useEffect } from "react";

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
import { useRegions } from "../../../../hooks";

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
