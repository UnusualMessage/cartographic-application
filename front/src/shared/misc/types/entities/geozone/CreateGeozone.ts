import { Geozone } from "./Geozone";

export interface CreateGeozone
  extends Omit<Geozone, "id" | "organization" | "department" | "feature"> {
  organizationId: string;
  departmentId?: string;
}
