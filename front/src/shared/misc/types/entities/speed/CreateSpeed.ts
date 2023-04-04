import { Speed } from "./Speed";

export interface CreateSpeed
  extends Omit<Speed, "id" | "organization" | "department"> {
  organizationId: string;
  departmentId?: string;
}
