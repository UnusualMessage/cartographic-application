import { Callback } from "../../common";

import { Event } from "./index";

export interface ListenersInjector<T extends Event> {
  addEventListener: (event: T) => Callback;
}
