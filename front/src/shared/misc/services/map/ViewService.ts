import { View } from "ol";
import { Coordinate } from "ol/coordinate";

import { MapStore } from "../../stores";

class ViewService {
  public getView() {
    return MapStore.map?.getView();
  }

  public createView() {
    return new View({
      center: [0, 0],
      zoom: 2,
    });
  }

  public centerWithZoomTo(zoom: number) {
    const view = this.getView();

    return (coordinate: Coordinate) => {
      this.stopAnimation();

      view?.animate({
        center: coordinate,
        zoom: zoom,
        duration: 1000,
      });
    };
  }

  public zoomIn() {
    const view = this.getView();
    view?.adjustZoom(1);
  }

  public zoomOut() {
    const view = this.getView();
    view?.adjustZoom(-1);
  }

  private stopAnimation() {
    const view = this.getView();
    const zoom = view?.getZoom();

    if (zoom) {
      view?.setZoom(zoom);
    }
  }
}

export default new ViewService();
