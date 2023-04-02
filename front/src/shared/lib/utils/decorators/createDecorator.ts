import { CreateDecoratorAction } from "../../../misc";

export function createDecorator<T = any>(action: CreateDecoratorAction<T>) {
  return (target: T, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const _this = this as T;
      await action(_this, originalMethod, ...args);
    };
  };
}
