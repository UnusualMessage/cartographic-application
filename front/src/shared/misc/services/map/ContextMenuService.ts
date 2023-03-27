import { geozonesLayerId } from "../../../constants";
import {
  LayersStore,
  FeaturesStore,
  SelectStore,
  ContextMenuStore,
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
    const layer = LayersStore.getVectorLayerById(geozonesLayerId);
    const coordinates = ContextMenuStore.coordinates;

    if (coordinates && layer) {
      FeaturesStore.insertCopiedFeatures(layer, coordinates);
    }

    ContextMenuStore.hide();
  }

  public remove() {
    const layer = LayersStore.getVectorLayerById(geozonesLayerId);

    if (layer) {
      FeaturesStore.removeSelectedFeatures(layer);
    }

    ContextMenuStore.hide();
  }
}

export default new ContextMenuService();
