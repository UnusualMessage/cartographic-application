import { Entity } from "../base";

export interface Organization extends Entity {
  title: string;
  text?: string;
}
