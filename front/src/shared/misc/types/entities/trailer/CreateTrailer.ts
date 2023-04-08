import { Trailer } from "./Trailer";

export interface CreateTrailer
  extends Omit<Trailer, "id" | "organization" | "department"> {
  organizationId: string;
  departmentId?: string;
}
