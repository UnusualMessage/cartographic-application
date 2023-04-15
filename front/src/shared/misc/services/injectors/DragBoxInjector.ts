import { DragBox, Select } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import { DragBoxEvents } from "../../enums";
import { FeaturesStore } from "../../stores";
import type { ListenersInjector } from "../../types";

class DragBoxInjector implements ListenersInjector<DragBoxEvents> {
  private _dragBox: DragBox;
  private _select: Select;
  private _source: VectorSource;

  constructor(dragBox: DragBox, select: Select, source: VectorSource) {
    this._select = select;
    this._dragBox = dragBox;
    this._source = source;
  }

  public addEventListener(event: DragBoxEvents) {
    switch (event) {
      case DragBoxEvents.boxstart:
        return this.addDragBoxOnStart();
      case DragBoxEvents.boxend:
        return this.addDragBoxOnEnd();
    }
  }

  private addDragBoxOnStart() {
    const onBoxStart = () => {
      this._select.getFeatures().clear();
      FeaturesStore.selectedFeatures = [];
    };

    this._dragBox.on("boxstart", onBoxStart);
    console.log("boxstart injected");

    return () => {
      this._dragBox.un("boxstart", onBoxStart);
      console.log("boxstart removed");
    };
  }

  private addDragBoxOnEnd() {
    const onBoxEnd = () => {
      const extent = this._dragBox.getGeometry().getExtent();
      const boxFeatures = this._source
        .getFeaturesInExtent(extent)
        .filter((feature) => feature.getGeometry()?.intersectsExtent(extent));

      FeaturesStore.selectedFeatures = boxFeatures;
      this._select.getFeatures().extend(boxFeatures);
    };

    this._dragBox.on("boxend", onBoxEnd);
    console.log("boxend injected");

    return () => {
      this._dragBox.un("boxend", onBoxEnd);
      console.log("boxend removed");
    };
  }
}

export default DragBoxInjector;
