import { Action } from "./Action";
import { Undo } from "./Undo";

export interface Change<T> {
  action: Action;
  undo: Undo<T>;
  oldValue: T;
  newValue: T;
}
