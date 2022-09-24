export type DragBoxEvent = "boxstart" | "boxend";
export type CommonEvent = "click" | "contextmenu";
export type SelectEvent = "select";
export type DrawEvent = "drawstart" | "drawend" | "drawabort";

type Event = DragBoxEvent | CommonEvent | SelectEvent | DrawEvent;

export default interface ListenersInjector<T extends Event> {
  addEventListener: (event: T) => void;
}
