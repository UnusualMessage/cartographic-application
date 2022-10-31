import Organization from "./Organization";

export default interface Post {
  id: string;
  title: string;
  number?: string;
  organization: Organization;
}
