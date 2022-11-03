import Organization from "./Organization";

export default interface Post {
  id: string;
  title: string;
  number?: string;
  organization: Organization;
}

export interface CreatePost {
  title: string;
  number?: string;
  organizationId: string;
}
