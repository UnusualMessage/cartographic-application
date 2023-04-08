import { Post } from "./Post";

export interface CreatePost
  extends Omit<Post, "id" | "organization" | "department"> {
  organizationId: string;
  departmentId?: string;
}
