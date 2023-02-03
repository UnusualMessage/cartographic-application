import Organization from "./Organization";

export default interface Speed {
  id: string;
  title: string;
  organization: Organization;
  min: number;
  max: number;
  timeLimit: number;
}

export interface CreateSpeed {
  title: string;
  organizationId: string;
  min: number;
  max: number;
  timeLimit: number;
}

export interface UpdateSpeed extends CreateSpeed {
  id: string;
}
