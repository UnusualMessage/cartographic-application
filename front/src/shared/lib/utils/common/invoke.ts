import { Callback } from "@shared/misc/types/common";

export const invoke = (callback: Callback) => {
  if (callback) {
    callback();
  }
};
