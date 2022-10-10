import BaseLayer from "ol/layer/Base";
import { FeatureLike } from "ol/Feature";

import MapStore from "../../stores/MapStore";
import LayersStore from "../../stores/LayersStore";
import FeaturesStore from "../../stores/FeaturesStore";

class LayersService {
  public removeLayer(layer: BaseLayer) {
    MapStore.removeLayer(layer);
    LayersStore.removeLayer(layer);
  }

  public createLayer(layer: BaseLayer, name: string) {
    MapStore.addLayer(layer);
    return LayersStore.createLayer(layer, name);
  }

  public removeFeature(feature: FeatureLike) {
    FeaturesStore.removeFeature(feature);
    LayersStore.removeFeature(feature);
  }

  public clearLayer() {
    LayersStore.clearDrawLayer();
    FeaturesStore.features = [];
  }
}

export default new LayersService();
