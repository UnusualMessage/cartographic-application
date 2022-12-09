import { Polygon } from "@turf/turf";

import Organization from "./Organization";

export default interface Geozone {
  id: string;
  title: string;
  geometry: Polygon;
  organization: Organization;
}

export interface CreateGeozone {
  title: string;
  geometry: Polygon;
  organizationId: string;
}

export interface UpdateGeozone extends CreateGeozone {
  id: string;
}
