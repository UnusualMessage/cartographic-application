export type Action =
  | "createFeature"
  | "translateFeature"
  | "removeFeature"
  | "modifyFeature";

export type Undo<T> = (oldValue: T, newValue: T) => void;

export type ChangeSet<T> = Change<T>[];

export interface Change<T> {
  action: Action;
  undo: Undo<T>;
  oldValue: T;
  newValue: T;
}
