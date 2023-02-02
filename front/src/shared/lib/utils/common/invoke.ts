import { Callback } from "../../../../types/common";

export const invoke = (callback: Callback) => {
  if (callback) {
    callback();
  }
};
