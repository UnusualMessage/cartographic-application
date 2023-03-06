import { Post, UpdatePost } from "../../../../misc";

export const getPostDefaultValues = (post?: Post): Partial<UpdatePost> => {
  return {
    id: post?.id,
    title: post?.title,
    organizationId: post?.organization.id,
  };
};
