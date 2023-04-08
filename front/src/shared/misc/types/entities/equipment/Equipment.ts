import { Feature, Point } from "@turf/turf";

import { Status } from "./Status";
import { Entity } from "../base";
import { Department } from "../department";
import { EquipmentType } from "../equipment-type";
import { Organization } from "../organization";

export interface Equipment extends Entity {
  name: string;
  status: Status;
  feature: Feature<Point>;
  type: EquipmentType;
  organization: Organization;
  department?: Department;
}
