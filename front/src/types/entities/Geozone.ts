import { Polygon } from "@turf/turf";

import Organization from "./Organization";

type Type = "field" | "petrol";

export default interface Geozone {
  id: string;
  title: string;
  area: number;
  type: Type;
  children: Geozone[];
  geometry: Polygon;
  organization: Organization;
}

export interface CreateGeozone
  extends Omit<Geozone, "id" | "organization" | "children"> {
  organizationId: string;
}

export interface UpdateGeozone extends CreateGeozone {
  id: string;
}
