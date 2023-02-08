import { Callback } from "@shared/api/types/common";

export const invoke = (callback: Callback) => {
  if (callback) {
    callback();
  }
};
