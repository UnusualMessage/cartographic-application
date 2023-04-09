import { invoke } from "./invoke";
import { Callback } from "../../../misc";

export const clean = (cleanups: Callback[]) => {
  for (const cleanup of cleanups) {
    invoke(cleanup);
  }
};
