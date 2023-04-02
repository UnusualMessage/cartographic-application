export interface ApiStore<T, CreateT, UpdateT> {
  getAll(): T[];
  getById(id: string): T | undefined;
  remove(id: string): void;
  duplicate(id: string): void;
  add(data: CreateT): void;
  update(data: UpdateT): void;
}
