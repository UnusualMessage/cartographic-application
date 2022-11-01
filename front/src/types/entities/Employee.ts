import Organization from "./Organization";
import Post from "./Post";

export default interface Employee {
  id: string;
  firstName: string;
  secondName?: string;
  patronymic?: string;
  phone?: string;
  post: Post;
  organization: Organization;
}
