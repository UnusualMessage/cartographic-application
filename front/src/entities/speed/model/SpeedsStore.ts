import { makeAutoObservable, runInAction } from "mobx";

import { speeds } from "@shared/assets";
import { Speed, UpdateSpeed, CreateSpeed, ApiStore } from "@shared/misc";

class SpeedsStore implements ApiStore<Speed, CreateSpeed, UpdateSpeed> {
  private _speeds: Speed[];
  private _speed: Speed | undefined;

  constructor() {
    this._speeds = speeds;
    this._speed = undefined;

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

  public async getById(id: string) {
    runInAction(() => {
      this._speed = this._speeds.find((item) => item.id === id);
    });

    return this._speed;
  }

  public async add(entity: CreateSpeed) {
    console.log(entity);
    const data = this._speeds.slice();

    runInAction(() => {
      this._speeds = data;
    });
  }

  public async duplicate(id: string) {
    console.log(id);
    const data = this._speeds.slice();

    runInAction(() => {
      this._speeds = data;
    });
  }

  public async update(entity: UpdateSpeed) {
    console.log(entity);
    const data = this._speeds.slice();

    runInAction(() => {
      this._speeds = data;
    });
  }

  public async remove(id: string) {
    const data = this._speeds.slice().filter((speed) => speed.id !== id);

    runInAction(() => {
      this._speeds = data;
      this._speed = undefined;
    });
  }
}

export default new SpeedsStore();