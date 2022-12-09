import Organization from "./Organization";

export default interface Post {
  id: string;
  title: string;
  organization: Organization;
}

export interface CreatePost {
  title: string;
  organizationId: string;
}

export interface UpdatePost extends CreatePost {
  id: string;
}
