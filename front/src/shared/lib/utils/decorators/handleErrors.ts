import { message } from "antd";

import { createDecorator } from "./createDecorator";

export const handleErrors = (desc?: string) =>
  createDecorator(async (self, method, ...args) => {
    try {
      return await method.call(self, ...args);
    } catch (error) {
      message.error(desc ?? (error as Error).message);
    }
  });
