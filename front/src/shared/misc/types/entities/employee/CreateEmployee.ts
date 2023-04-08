import { Employee } from "./Employee";

export interface CreateEmployee
  extends Omit<Employee, "id" | "organization" | "department" | "post"> {
  postId: string;
  organizationId: string;
  departmentId?: string;
}
