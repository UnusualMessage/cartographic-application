import { makeAutoObservable } from "mobx";

class ModalsStore {
  private _isOpen: boolean;
  private _buffer: string;

  constructor() {
    this._isOpen = false;
    this._buffer = "";

    makeAutoObservable(this);
  }

  public get buffer() {
    return this._buffer;
  }

  public set buffer(value) {
    this._buffer = value;
  }

  public get isOpen() {
    return this._isOpen;
  }

  public open() {
    this._isOpen = true;
  }

  public close() {
    this._isOpen = false;
  }
}

export default new ModalsStore();
