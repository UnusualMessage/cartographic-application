import { makeAutoObservable } from "mobx";
import { View } from "ol";
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
    this._view = null;
  }

  public centerTo(coordinate: Coordinate) {
    this.stopAnimation();

    this._view?.animate({
      center: coordinate,
      zoom: 10,
      duration: 2000,
    });
  }

  public zoomIn() {
    this._view?.adjustZoom(1);
  }

  public zoomOut() {
    this._view?.adjustZoom(-1);
  }

  private stopAnimation() {
    const zoom = this._view?.getZoom();

    if (zoom) {
      this._view?.setZoom(zoom);
    }
  }
}

export default new ViewStore();
