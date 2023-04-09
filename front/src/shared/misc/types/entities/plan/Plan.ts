import { Entity } from "../base";

export interface Plan extends Entity {
  title: string;
  type: string;
  target: number;
  year: number;
}
