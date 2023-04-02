import { Error } from "./responses";

export type Out<T> = Promise<T | Error>;

export interface ApiService<T, CreateT, UpdateT> {
  getAll(): Out<T[]>;
  getById(id: string): Out<T>;
  delete(id: string): Out<T>;
  post(data: CreateT): Out<T>;
  put(data: UpdateT): Out<T>;
}
