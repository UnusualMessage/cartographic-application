import { Entity } from "../base";
import { Department } from "../department";
import { Organization } from "../organization";

export interface EquipmentType extends Entity {
  name: string;
  organization: Organization;
  department?: Department;
}
