import { Post, TablePost } from "../../../../misc";

export const mapPostToTable = (post: Post): TablePost => {
  return {
    id: post.id,
    key: post.id,
    title: post.title,
    organization: post.organization.title,
  };
};
