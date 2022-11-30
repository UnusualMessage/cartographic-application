import Organization from "./Organization";

export default interface Department {
  id: string;
  title: string;
  organization: Organization;
}

export interface CreateDepartment {
  title: string;
  organization: Organization;
}

export interface UpdateDepartment extends CreateDepartment {
  id: string;
}
