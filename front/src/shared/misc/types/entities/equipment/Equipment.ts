import { Feature, Point } from "@turf/turf";

import { EquipmentType } from "./EquipmentType";
import { Status } from "./Status";
import { Entity } from "../base";

export interface Equipment extends Entity {
  name: string;
  status: Status;
  type: EquipmentType;
  feature: Feature<Point>;
}
