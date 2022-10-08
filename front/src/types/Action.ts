export type Action =
  | "createFeature"
  | "translateFeature"
  | "removeFeature"
  | "modifyFeature";

export default interface Change<T> {
  action: Action;
  target: T;
}
