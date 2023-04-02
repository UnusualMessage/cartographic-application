import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { speeds } from "@shared/assets";
import {
  Speed,
  UpdateSpeed,
  CreateSpeed,
  ApiStore,
  FetchService,
} from "@shared/misc";

import SpeedsService from "./SpeedsService";

class SpeedsStore implements ApiStore<Speed, CreateSpeed, UpdateSpeed> {
  private _speeds: Speed[];
  private _speed?: Speed;

  private _api: SpeedsService;
  private _fetch: FetchService;

  constructor() {
    this._speeds = speeds;
    this._speed = undefined;

    this._api = new SpeedsService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get speeds() {
    return this._speeds;
  }

  public set speeds(value) {
    this._speeds = value;
  }

  public get speed() {
    return this._speed;
  }

  public set speed(value) {
    this._speed = value;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result) => {
        this.speeds = result;
      }
    );

    return this._speeds;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result) => {
        this.speed = result;
      }
    );

    return this._speed;
  }

  public async add(entity: CreateSpeed) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result) => {
        this._speeds.push(result);
      }
    );
  }

  public async update(entity: UpdateSpeed) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this._speeds.findIndex((item) => item.id === entity.id);
        this._speeds[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this._speeds = this._speeds.filter((item) => item.id !== result.id);
      }
    );
  }

  public async duplicate(id: string) {
    const record = this._speeds.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this._speeds.push(copy);
    }
  }
}

export default new SpeedsStore();
