import { observer } from "mobx-react-lite";
import { Region } from "@blueprintjs/table";
import { useState } from "react";

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
  const [regions, setRegions] = useState<Region[]>([]);

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
