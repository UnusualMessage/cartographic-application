import { Geozone } from "./Geozone";

export interface CreateGeozone
  extends Omit<Geozone, "id" | "organization" | "children"> {
  organizationId: string;
}
