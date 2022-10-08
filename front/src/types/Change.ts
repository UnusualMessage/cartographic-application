export type Action =
  | "createFeature"
  | "translateFeature"
  | "removeFeature"
  | "modifyFeature";

export type Undo<T> = (oldValue: T, newValue: T) => void;

export default interface Change<T> {
  action: Action;
  undo: Undo<T>;
  oldValue: T;
  newValue: T;
}
