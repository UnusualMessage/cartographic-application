import { FeaturesStore } from "../../stores";

import {
  InteractionsStore,
  LayersStore,
  OverlaysStore,
} from "../../stores/map";

class FeaturesService {
  public copy() {
    FeaturesStore.copySelectedFeatures();
    OverlaysStore.hideContextMenu();
  }

  public close() {
    OverlaysStore.hideContextMenu();
    FeaturesStore.clearBuffer();
    InteractionsStore.clearSelectBuffer();
  }

  public insert() {
    const layer = LayersStore.vectorLayer;
    const cursor = OverlaysStore.cursorPosition;

    if (cursor && layer) {
      FeaturesStore.insertCopiedFeatures(layer, cursor);
    }

    OverlaysStore.hideContextMenu();
  }

  public remove() {
    const layer = LayersStore.vectorLayer;

    if (layer) {
      FeaturesStore.removeSelectedFeatures(layer);
    }

    OverlaysStore.hideContextMenu();
  }
}

export default new FeaturesService();
