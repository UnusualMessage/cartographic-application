import {
  FeaturesStore,
  InteractionsStore,
  LayersStore,
  OverlaysStore,
} from "../../stores";

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
    const layer = LayersStore.drawLayer;
    const cursor = OverlaysStore.cursorPosition;

    if (cursor) {
      FeaturesStore.insertCopiedFeatures(layer, cursor);
    }

    OverlaysStore.hideContextMenu();
  }

  public remove() {
    const layer = LayersStore.drawLayer;
    FeaturesStore.removeSelectedFeatures(layer);
    OverlaysStore.hideContextMenu();
  }
}

export default new FeaturesService();
