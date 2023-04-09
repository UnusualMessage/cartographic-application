import { Map } from "ol";
import { Coordinate } from "ol/coordinate";

import { CustomOverlay } from "../../types";

class OverlaysService {
  public showOverlay(wrapper: CustomOverlay, coordinates: Coordinate) {
    wrapper.active = true;
    wrapper.overlay?.setPosition(coordinates);
  }

  public hideOverlay(overlay: CustomOverlay) {
    overlay.active = false;
    overlay.overlay?.setPosition(undefined);
  }

  public resetOverlay(overlay: CustomOverlay) {
    overlay.overlay = undefined;
    overlay.element = undefined;
    overlay.active = false;
  }

  public removeOverlay(wrapper: CustomOverlay, map: Map) {
    this.resetOverlay(wrapper);

    if (wrapper.overlay) {
      map.removeOverlay(wrapper.overlay);
    }
  }
}

export default new OverlaysService();
