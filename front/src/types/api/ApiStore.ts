type Out<T> = Promise<T | undefined>;

export interface ApiStore<T, CreateT> {
  getById(id: string): Out<T>;
  add(data: CreateT): void;
}
