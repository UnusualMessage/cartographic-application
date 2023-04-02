import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { speeds } from "@shared/assets";
import { isError } from "@shared/lib";
import {
  Speed,
  UpdateSpeed,
  CreateSpeed,
  ApiStore,
  ResponseService,
} from "@shared/misc";

import SpeedsService from "./SpeedsService";

class SpeedsStore implements ApiStore<Speed, CreateSpeed, UpdateSpeed> {
  private _speeds: Speed[];
  private _speed?: Speed;

  private _apiService: SpeedsService;
  private _responseService: ResponseService;

  constructor() {
    this._speeds = speeds;
    this._speed = undefined;

    this._apiService = new SpeedsService();
    this._responseService = new ResponseService();

    makeAutoObservable(this);
  }

  public get speeds() {
    return this._speeds;
  }

  public get speed() {
    return this._speed;
  }

  public set speed(value) {
    this._speed = value;
  }

  public async getAll() {
    return this._speeds;
  }

  public async getById(id: string) {
    const response = await this._apiService.getById(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._speed = response;
    this._responseService.invokeSuccess();
    return response;
  }

  public async add(entity: CreateSpeed) {
    const response = await this._apiService.post(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._speeds.push(response);
    this._responseService.invokeSuccess();
  }

  public async duplicate(id: string) {
    const record = this._speeds.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._speeds.push(copy);
    }
  }

  public async update(entity: UpdateSpeed) {
    const response = await this._apiService.put(entity);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    const index = this._speeds.findIndex((item) => item.id === entity.id);
    this._speeds[index] = response;

    this._responseService.invokeSuccess();
  }

  public async remove(id: string) {
    const response = await this._apiService.delete(id);

    if (isError(response)) {
      this._responseService.invokeError(response.message);
      return;
    }

    this._speeds = this._speeds.filter((item) => item.id !== response.id);
    this._responseService.invokeSuccess();
  }
}

export default new SpeedsStore();
