import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { trailers } from "@shared/assets";
import { isError } from "@shared/lib";
import {
  Trailer,
  CreateTrailer,
  UpdateTrailer,
  ApiStore,
  ResponseService,
} from "@shared/misc";

import TrailersService from "./TrailersService";

class TrailersStore implements ApiStore<Trailer, CreateTrailer, UpdateTrailer> {
  private _trailers: Trailer[];
  private _trailer?: Trailer;

  private _apiService: TrailersService;
  private _responseService: ResponseService;

  constructor() {
    this._trailers = trailers;
    this._trailer = undefined;

    this._apiService = new TrailersService();
    this._responseService = new ResponseService();

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

  public async getAll() {
    return this._trailers;
  }

  public async getById(id: string) {
    const response = await this._apiService.getById(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._trailer = response;
    this._responseService.invokeSuccess();
    return response;
  }

  public async add(entity: CreateTrailer) {
    const response = await this._apiService.post(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._trailers.push(response);
    this._responseService.invokeSuccess();
  }

  public async duplicate(id: string) {
    const record = this._trailers.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._trailers.push(copy);
    }
  }

  public async update(entity: UpdateTrailer) {
    const response = await this._apiService.put(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    const index = this._trailers.findIndex((item) => item.id === entity.id);
    this._trailers[index] = response;

    this._responseService.invokeSuccess();
  }

  public async remove(id: string) {
    const response = await this._apiService.delete(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._trailers = this._trailers.filter((item) => item.id !== response.id);
    this._responseService.invokeSuccess();
  }
}

export default new TrailersStore();
