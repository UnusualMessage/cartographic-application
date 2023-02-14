import { Feature, Polygon } from "@turf/turf";

import { GeozoneType } from "./GeozoneType";
import { Organization } from "../organization";

export interface Geozone {
  id: string;
  title: string;
  area: number;
  type: GeozoneType;
  children: Geozone[];
  feature: Feature<Polygon>;
  organization: Organization;
}
