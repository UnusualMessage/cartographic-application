import { Feature, Polygon, Position } from "@turf/turf";

import { GeozoneType } from "./GeozoneType";
import { Organization } from "../organization";

export interface Properties {
  center: Position;
}

export interface Geozone {
  id: string;
  title: string;
  area: number;
  feature: Feature<Polygon, Properties>;
  type: GeozoneType;
  children: Geozone[];
  organization: Organization;
}
