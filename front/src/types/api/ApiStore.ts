type Out<T> = Promise<T | undefined>;

export interface ApiStore<T> {
  getById(id: string): Out<T>;
}
