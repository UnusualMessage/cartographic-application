import { Organization } from "../organization";

export interface Speed {
  id: string;
  title: string;
  organization: Organization;
  min: number;
  max: number;
  timeLimit: number;
}
