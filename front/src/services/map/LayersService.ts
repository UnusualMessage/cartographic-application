import BaseLayer from "ol/layer/Base";
import { FeatureLike } from "ol/Feature";

import { FeaturesStore, LayersStore, MapStore } from "../../stores";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { BaseLayerType } from "../../types/BaseLayerType";

class LayersService {
  public removeVectorLayer(layer: VectorLayer<VectorSource>) {
    MapStore.removeLayer(layer);
    LayersStore.removeVectorLayer();
  }

  public createVectorLayer(source: VectorSource) {
    const layer = LayersStore.createVectorLayer(source);
    MapStore.addLayer(layer);
    return layer;
  }

  public createBaseLayer(type: BaseLayerType) {
    const layer = LayersStore.createBaseLayer(type);

    if (layer) {
      MapStore.addLayer(layer);
    }

    return layer;
  }

  public removeBaseLayer(layer: BaseLayer) {
    MapStore.removeLayer(layer);
  }

  public removeFeature(feature: FeatureLike) {
    FeaturesStore.removeFeature(feature);
    LayersStore.removeFeature(feature);
  }
}

export default new LayersService();
