import { Mounted } from "./Mounted";

export interface CreateMounted
  extends Omit<Mounted, "id" | "organization" | "department"> {
  organizationId: string;
  departmentId?: string;
}
