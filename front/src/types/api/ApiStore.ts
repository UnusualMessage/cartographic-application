type Out<T> = Promise<T | undefined>;

export interface ApiStore<T, CreateT> {
  getById(id: string): Out<T>;
  remove(id: string): void;
  duplicate(id: string): void;
  add(data: CreateT): void;
}
