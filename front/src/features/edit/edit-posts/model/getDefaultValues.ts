import { AuthStore } from "@entities/auth";
import { Post, UpdatePost } from "@shared/misc";

export const getDefaultValues = (post?: Post): Partial<UpdatePost> => {
  const currentOrganization = AuthStore.user?.organization;

  return {
    id: post?.id,
    title: post?.title,
    organizationId: currentOrganization?.id,
    departmentId: post?.department?.id,
  };
};
