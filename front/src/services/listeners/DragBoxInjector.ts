import { DragBox, Select } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import { FeaturesStore } from "../../stores";
import ListenersInjector, { DragBoxEvent } from "./ListenersInjector";

class DragBoxInjector implements ListenersInjector<DragBoxEvent> {
  private _dragBox: DragBox;
  private _select: Select;
  private _source: VectorSource;

  constructor(dragBox: DragBox, select: Select, source: VectorSource) {
    this._select = select;
    this._dragBox = dragBox;
    this._source = source;
  }

  public addEventListener(event: DragBoxEvent): void {
    switch (event) {
      case "boxstart":
        this.addDragBoxOnStart();
        break;
      case "boxend":
        this.addDragBoxOnEnd();
        break;
      default:
        break;
    }
  }

  private addDragBoxOnStart() {
    this._dragBox.on("boxstart", () => {
      this._select.getFeatures().clear();
      FeaturesStore.selectedFeatures = [];
    });
  }

  private addDragBoxOnEnd() {
    this._dragBox.on("boxend", () => {
      const extent = this._dragBox.getGeometry().getExtent();
      const boxFeatures = this._source
        .getFeaturesInExtent(extent)
        .filter((feature) => feature.getGeometry()?.intersectsExtent(extent));

      FeaturesStore.selectedFeatures = boxFeatures;
      this._select.getFeatures().extend(boxFeatures);
    });
  }
}

export default DragBoxInjector;
