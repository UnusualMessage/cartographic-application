import { makeAutoObservable, runInAction } from "mobx";

import { ApiStore } from "@shared/misc/types/api";
import { Trailer } from "@shared/misc/types/entities";
import {
  CreateTrailer,
  UpdateTrailer,
} from "@shared/misc/types/entities/Trailer";
import { trailers } from "@shared/assets/samples";

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
    const data = this._trailers.slice();

    runInAction(() => {
      this._trailers = data;
    });
  }

  public async duplicate(id: string) {
    const data = this._trailers.slice();

    runInAction(() => {
      this._trailers = data;
    });
  }

  public async update(entity: UpdateTrailer) {
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
