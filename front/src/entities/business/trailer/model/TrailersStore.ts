import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { trailers } from "@shared/assets";
import {
  Trailer,
  CreateTrailer,
  UpdateTrailer,
  ApiStore,
  FetchService,
} from "@shared/misc";

import TrailersService from "./TrailersService";

class TrailersStore implements ApiStore<Trailer, CreateTrailer, UpdateTrailer> {
  private _trailers: Trailer[];
  private _trailer?: Trailer;

  private _api: TrailersService;
  private _fetch: FetchService;

  constructor() {
    this._trailers = trailers;
    this._trailer = undefined;

    this._api = new TrailersService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get trailers() {
    return this._trailers;
  }

  public set trailers(value) {
    this._trailers = value;
  }

  public get trailer() {
    return this._trailer;
  }

  public set trailer(value) {
    this._trailer = value;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result) => {
        this.trailers = result;
      }
    );

    return this._trailers;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result) => {
        this.trailer = result;
      }
    );

    return this._trailer;
  }

  public async add(entity: CreateTrailer) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result) => {
        this._trailers.push(result);
      }
    );
  }

  public async update(entity: UpdateTrailer) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this._trailers.findIndex((item) => item.id === entity.id);
        this._trailers[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this._trailers = this._trailers.filter((item) => item.id !== result.id);
      }
    );
  }

  public async duplicate(id: string) {
    const record = this._trailers.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._trailers.push(copy);
    }
  }
}

export default new TrailersStore();
