import VectorLayer from "ol/layer/Vector";

import { geozonesLayerId } from "../../../constants";
import {
  FeaturesStore,
  SelectStore,
  ContextMenuStore,
  MapStore,
} from "../../stores";

class ContextMenuService {
  public copy() {
    FeaturesStore.copySelectedFeatures();
    ContextMenuStore.hide();
  }

  public close() {
    ContextMenuStore.hide();
    FeaturesStore.clearBuffer();
    SelectStore.clearSelectBuffer();
  }

  public insert() {
    const layer = MapStore.getLayerById(geozonesLayerId);
    const coordinates = ContextMenuStore.coordinates;

    if (coordinates && layer instanceof VectorLayer) {
      FeaturesStore.insertCopiedFeatures(layer, coordinates);
    }

    ContextMenuStore.hide();
  }

  public remove() {
    const layer = MapStore.getLayerById(geozonesLayerId);

    if (layer instanceof VectorLayer) {
      FeaturesStore.removeSelectedFeatures(layer);
    }

    ContextMenuStore.hide();
  }
}

export default new ContextMenuService();
