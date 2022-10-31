import Organization from "./Organization";
import Post from "./Post";

export default interface Employee {
  id: string;
  fullName: string;
  post: Post;
  organization: Organization;
}
