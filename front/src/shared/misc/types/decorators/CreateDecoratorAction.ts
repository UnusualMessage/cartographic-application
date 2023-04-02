export type CreateDecoratorAction<T> = (
  self: T,
  // eslint-disable-next-line @typescript-eslint/ban-types
  originalMethod: Function,
  ...args: any[]
) => Promise<void> | void;
