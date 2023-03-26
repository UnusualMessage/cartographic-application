import { Coordinate } from "ol/coordinate";

import { GeozoneType } from "./GeozoneType";
import { Organization } from "../organization";

export interface Geozone {
  id: string;
  title: string;
  area: number;
  coordinates: Coordinate;
  type: GeozoneType;
  children: Geozone[];
  organization: Organization;
}
