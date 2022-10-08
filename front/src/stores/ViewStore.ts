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

  public disposeView() {
    this._view?.dispose();
  }

  public centerTo(coordinate: Coordinate) {
    this.stopAnimation();

    this._view?.animate({
      center: coordinate,
      zoom: this._view.getZoom(),
      duration: 1000,
    });
  }

  private stopAnimation() {
    const zoom = this._view?.getZoom();

    if (zoom) {
      this._view?.setZoom(zoom);
    }
  }
}

export default new ViewStore();
