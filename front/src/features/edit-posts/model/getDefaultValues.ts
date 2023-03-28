import { Post, UpdatePost } from "@shared/misc";

export const getDefaultValues = (post?: Post): Partial<UpdatePost> => {
  return {
    id: post?.id,
    title: post?.title,
    organizationId: post?.organization.id,
  };
};
