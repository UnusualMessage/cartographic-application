import { makeAutoObservable } from "mobx";
import { Coordinate } from "ol/coordinate";
import { FeatureLike } from "ol/Feature";

import { geozones } from "@shared/assets";
import { Changes, Geozone } from "@shared/misc";

class GeozonesStore {
  private _geozones: Geozone[];
  private _history: Changes<FeatureLike>[];

  constructor() {
    this._geozones = geozones;
    this._history = [];

    makeAutoObservable(this);
  }

  public get geozones() {
    return this._geozones;
  }

  public getById(id: string) {
    return this._geozones.find((item) => item.id === id);
  }

  public translate(
    ids: (string | undefined)[],
    coordinates: (Coordinate[][] | undefined)[]
  ) {
    const geozones = this._geozones.slice();

    let index = 0;
    for (const id of ids) {
      const geozone = geozones.find((item) => item.id === id);
      const coordinate = coordinates[index];

      if (geozone && coordinate) {
        geozone.feature.geometry.coordinates = coordinate;
      }

      ++index;
    }

    this._geozones = geozones;
  }

  public add(zone: Geozone) {
    const copy = this._geozones.slice();
    copy.push(zone);
    this._geozones = copy;
  }

  public remove(id: string) {
    this._geozones = this.geozones.filter((item) => item.id !== id);
  }

  public push(set: Changes<FeatureLike>) {
    const copy = this._history.slice();

    copy.push(set);

    this._history = copy;
  }
}

export default new GeozonesStore();
