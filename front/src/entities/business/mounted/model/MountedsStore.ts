import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import {
  ApiStore,
  FetchService,
  Mounted,
  CreateMounted,
  UpdateMounted,
} from "@shared/misc";

import MountedsService from "./MountedsService";

class MountedsStore implements ApiStore<Mounted, CreateMounted, UpdateMounted> {
  private _mounteds: Mounted[];
  private _mounted?: Mounted;

  private _api: MountedsService;
  private _fetch: FetchService;

  constructor() {
    this._mounteds = [];
    this._mounted = undefined;

    this._api = new MountedsService();
    this._fetch = new FetchService();

    makeAutoObservable(this);
  }

  public get mounted() {
    return this._mounted;
  }

  public set mounted(value) {
    this._mounted = value;
  }

  public get mounteds() {
    return this._mounteds;
  }

  public set mounteds(value) {
    this._mounteds = value;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result) => {
        this.mounteds = result;
      }
    );

    return this.mounteds;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result) => {
        this.mounted = result;
      }
    );

    return this.mounted;
  }

  public async add(entity: CreateMounted) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result) => {
        this.mounteds.push(result);
      }
    );
  }

  public async update(entity: UpdateMounted) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this.mounteds.findIndex((item) => item.id === entity.id);
        this.mounteds[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this.mounteds = this.mounteds.filter((item) => item.id !== result.id);
      }
    );
  }

  public async duplicate(id: string) {
    const record = this.mounteds.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this.mounteds.push(copy);
    }
  }
}

export default new MountedsStore();
