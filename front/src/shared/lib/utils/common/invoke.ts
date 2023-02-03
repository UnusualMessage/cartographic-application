import { Callback } from "../../../api/types/common";

export const invoke = (callback: Callback) => {
  if (callback) {
    callback();
  }
};
