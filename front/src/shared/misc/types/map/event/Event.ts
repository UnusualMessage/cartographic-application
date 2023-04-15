import {
  CommonEvents,
  DrawEvents,
  DragBoxEvents,
  ModifyEvents,
  SelectEvents,
  TranslateEvents,
} from "../../../enums";

export type Event =
  | CommonEvents
  | DrawEvents
  | DragBoxEvents
  | ModifyEvents
  | SelectEvents
  | TranslateEvents;
