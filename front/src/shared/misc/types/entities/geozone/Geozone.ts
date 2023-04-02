import { Feature, Polygon, Position } from "@turf/turf";

import { GeozoneType } from "./GeozoneType";
import { Entity } from "../base";
import { Organization } from "../organization";

export interface Properties {
  center: Position;
}

export interface Geozone extends Entity {
  title: string;
  area: number;
  feature: Feature<Polygon, Properties>;
  type: GeozoneType;
  children: Geozone[];
  organization: Organization;
}
