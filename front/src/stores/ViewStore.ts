import { View } from "ol";
import { makeAutoObservable } from "mobx";
import { Coordinate } from "ol/coordinate";

class ViewStore {
  private _view: View | null;

  constructor() {
    this._view = null;

    makeAutoObservable(this);
  }

  public createView(zoom: number, center: Coordinate) {
    this._view = new View({
      zoom: zoom,
      center: center,
    });

    return this._view;
  }

  public get getView() {
    return this._view;
  }
}

export default new ViewStore();
