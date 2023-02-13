import { Callback } from "../common";

export type DragBoxEvent = "boxstart" | "boxend";
export type CommonEvent = "click" | "contextmenu" | "pointermove";
export type SelectEvent = "select";
export type DrawEvent = "drawstart" | "drawend" | "drawabort";
export type ModifyEvent = "modifyend" | "modifystart";
export type TranslateEvent = "translatestart" | "translateend";

type Event =
  | DragBoxEvent
  | CommonEvent
  | SelectEvent
  | DrawEvent
  | ModifyEvent
  | TranslateEvent;

export default interface ListenersInjector<T extends Event> {
  addEventListener: (event: T) => Callback;
}
