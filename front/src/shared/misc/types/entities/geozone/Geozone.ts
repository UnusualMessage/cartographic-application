import { Feature, Polygon } from "@turf/turf";

import { Entity } from "../base";
import { Department } from "../department";
import { Organization } from "../organization";

export interface Geozone extends Entity {
  title: string;
  feature: Feature<Polygon>;
  organization: Organization;
  department?: Department;
}
