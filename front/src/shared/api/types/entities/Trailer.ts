import Department from "./Department";
import Organization from "./Organization";

export default interface Trailer {
  id: string;
  title: string;
  organization: Organization;
  department: Department;
}

export interface CreateTrailer {
  title: string;
  organizationId: string;
  departmentId: string;
}

export interface UpdateTrailer extends CreateTrailer {
  id: string;
}
