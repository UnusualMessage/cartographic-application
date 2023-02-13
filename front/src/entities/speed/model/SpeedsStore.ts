import { makeAutoObservable, runInAction } from "mobx";

import { ApiStore } from "@shared/misc/types/api";
import { Speed } from "@shared/misc/types/entities";
import { CreateSpeed, UpdateSpeed } from "@shared/misc/types/entities/Speed";
import { speeds } from "@shared/assets/samples";

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
    const data = this._speeds.slice();

    runInAction(() => {
      this._speeds = data;
    });
  }

  public async duplicate(id: string) {
    const data = this._speeds.slice();

    runInAction(() => {
      this._speeds = data;
    });
  }

  public async update(entity: UpdateSpeed) {
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
