import { DragBox, Select } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import FeaturesStore from "@entities/map-features/model/FeaturesStore";

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

  public addEventListener(event: DragBoxEvent) {
    switch (event) {
      case "boxstart":
        return this.addDragBoxOnStart();
      case "boxend":
        return this.addDragBoxOnEnd();
    }
  }

  private addDragBoxOnStart() {
    const onBoxStart = () => {
      this._select.getFeatures().clear();
      FeaturesStore.selectedFeatures = [];
    };

    this._dragBox.on("boxstart", onBoxStart);

    return () => {
      this._dragBox.un("boxstart", onBoxStart);
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

    return () => {
      this._dragBox.un("boxend", onBoxEnd);
    };
  }
}

export default DragBoxInjector;
