import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

import { geozones } from "@shared/assets";
import type { Geozone, CreateGeozone, UpdateGeozone } from "@shared/misc";
import { FetchService, ApiStore } from "@shared/misc";

import GeozonesService from "./GeozonesService";

class GeozonesStore implements ApiStore<Geozone, CreateGeozone, UpdateGeozone> {
  private _geozone?: Geozone;
  private _geozones: Geozone[];

  private _api: GeozonesService;
  private _fetch: FetchService;

  private _menuGeozoneId?: string;

  constructor() {
    this._geozone = undefined;
    this._geozones = geozones;

    this._api = new GeozonesService();
    this._fetch = new FetchService();

    this._menuGeozoneId = undefined;

    makeAutoObservable(this);
  }

  public get geozones() {
    return this._geozones;
  }

  public set geozones(value) {
    this._geozones = value;
  }

  public get geozone() {
    return this._geozone;
  }

  public set geozone(value) {
    this._geozone = value;
  }

  public get menuGeozoneId() {
    return this._menuGeozoneId;
  }

  public choose(id?: string) {
    this._menuGeozoneId = id;
  }

  public async getAll() {
    await this._fetch.handleRequest(
      () => {
        return this._api.getAll();
      },
      (result) => {
        this.geozones = result;
      }
    );

    return this.geozones;
  }

  public async getById(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.getById(id);
      },
      (result) => {
        this.geozone = result;
      }
    );

    return this.geozone;
  }

  public async add(entity: CreateGeozone) {
    await this._fetch.handleRequest(
      () => {
        return this._api.post(entity);
      },
      (result) => {
        this.geozones.push(result);
      }
    );
  }

  public async update(entity: UpdateGeozone) {
    await this._fetch.handleRequest(
      () => {
        return this._api.put(entity);
      },
      (result) => {
        const index = this.geozones.findIndex((item) => item.id === entity.id);
        this.geozones[index] = result;
      }
    );
  }

  public async remove(id: string) {
    await this._fetch.handleRequest(
      () => {
        return this._api.delete(id);
      },
      (result) => {
        this.geozones = this.geozones.filter((item) => item.id !== result.id);
      }
    );
  }

  public async duplicate(id: string) {
    const record = this.geozones.find((item) => item.id === id);

    if (record) {
      const copy = { ...record, id: uuid() };
      this.geozones.push(copy);
    }
  }
}

export default new GeozonesStore();
