import { Callback } from "../../../misc";

export const invoke = (callback: Callback) => {
  if (callback) {
    callback();
  }
};
