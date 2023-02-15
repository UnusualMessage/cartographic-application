import { CommonEvent } from "./CommonEvent";
import { DragBoxEvent } from "./DragBoxEvent";
import { DrawEvent } from "./DrawEvent";
import { ModifyEvent } from "./ModifyEvent";
import { SelectEvent } from "./SelectEvent";
import { TranslateEvent } from "./TranslateEvent";

export type Event =
  | DragBoxEvent
  | CommonEvent
  | SelectEvent
  | DrawEvent
  | ModifyEvent
  | TranslateEvent;
