import Organization from "./Organization";
import Post from "./Post";

export default interface Employee {
  id: string;
  firstName: string;
  secondName?: string;
  patronymic?: string;
  phone?: string;
  birthDate?: string;
  driverCard?: string;
  post: Post;
  organization: Organization;
}

export interface CreateEmployee {
  firstName: string;
  secondName?: string;
  patronymic?: string;
  phone?: string;
  birthDate?: string;
  driverCard?: string;
  postId: string;
  organizationId: string;
}

export interface UpdateEmployee extends CreateEmployee {
  id: string;
}
