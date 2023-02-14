import { Event } from "./event";
import { Callback } from "../common";

export interface ListenersInjector<T extends Event> {
  addEventListener: (event: T) => Callback;
}
