export type Action =
  | "createFeature"
  | "translateFeature"
  | "removeFeature"
  | "modifyFeature";

export type Undo = () => void;

export default interface Change<T> {
  action: Action;
  target: T;
  undo: Undo;
}
