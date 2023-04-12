import { Event } from "./Event";
import { Callback } from "../../common";

export interface ListenersInjector<T extends Event> {
  addEventListener: (event: T) => Callback;
}
