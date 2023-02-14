import { makeAutoObservable, runInAction } from "mobx";

import { trailers } from "@shared/assets";
import { Trailer, CreateTrailer, UpdateTrailer, ApiStore } from "@shared/misc";

class TrailersStore implements ApiStore<Trailer, CreateTrailer, UpdateTrailer> {
  private _trailers: Trailer[];
  private _trailer: Trailer | undefined;

  constructor() {
    this._trailers = trailers;
    this._trailer = undefined;

    makeAutoObservable(this);
  }

  public get trailers() {
    return this._trailers;
  }

  public get trailer() {
    return this._trailer;
  }

  public set trailer(value) {
    this._trailer = value;
  }

  public async getById(id: string) {
    runInAction(() => {
      this._trailer = this._trailers.find((item) => item.id === id);
    });

    return this._trailer;
  }

  public async add(entity: CreateTrailer) {
    console.log(entity);
    const data = this._trailers.slice();

    runInAction(() => {
      this._trailers = data;
    });
  }

  public async duplicate(id: string) {
    console.log(id);
    const data = this._trailers.slice();

    runInAction(() => {
      this._trailers = data;
    });
  }

  public async update(entity: UpdateTrailer) {
    console.log(entity);
    const data = this._trailers.slice();

    runInAction(() => {
      this._trailers = data;
    });
  }

  public async remove(id: string) {
    const data = this._trailers.slice().filter((item) => item.id !== id);

    runInAction(() => {
      this._trailers = data;
      this._trailer = undefined;
    });
  }
}

export default new TrailersStore();
