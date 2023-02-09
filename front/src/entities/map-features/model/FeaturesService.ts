import { InteractionsStore } from "@features/interactions";
import { LayersStore } from "@features/layers/model";
import { OverlaysStore } from "@features/map-overlay";
import { geozonesLayerId } from "@shared/constants";

import FeaturesStore from "./FeaturesStore";

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
    const layer = LayersStore.getVectorLayerById(geozonesLayerId);
    const cursor = OverlaysStore.cursorPosition;

    if (cursor && layer) {
      FeaturesStore.insertCopiedFeatures(layer, cursor);
    }

    OverlaysStore.hideContextMenu();
  }

  public remove() {
    const layer = LayersStore.getVectorLayerById(geozonesLayerId);

    if (layer) {
      FeaturesStore.removeSelectedFeatures(layer);
    }

    OverlaysStore.hideContextMenu();
  }
}

export default new FeaturesService();
