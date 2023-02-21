import { geozonesLayerId } from "../../../constants";
import {
  OverlaysStore,
  LayersStore,
  FeaturesStore,
  SelectStore,
} from "../../stores";

class FeaturesService {
  public copy() {
    FeaturesStore.copySelectedFeatures();
    OverlaysStore.hideContextMenu();
  }

  public close() {
    OverlaysStore.hideContextMenu();
    FeaturesStore.clearBuffer();
    SelectStore.clearSelectBuffer();
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
