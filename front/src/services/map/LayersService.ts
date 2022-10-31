import BaseLayer from "ol/layer/Base";
import { FeatureLike } from "ol/Feature";

import { FeaturesStore } from "../../stores";
import { LayersStore, MapStore } from "../../stores/map";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { BaseLayerType } from "../../types/common/BaseLayerType";

class LayersService {
  public createVectorLayer(source: VectorSource) {
    const layer = LayersStore.createVectorLayer(source);
    MapStore.addLayer(layer);
    return layer;
  }

  public createAuxLayer(source: VectorSource) {
    const layer = LayersStore.createAuxLayer(source);
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

  public removeVectorLayer(layer: VectorLayer<VectorSource>) {
    MapStore.removeLayer(layer);
    LayersStore.removeVectorLayer();
  }

  public removeAuxLayer(layer: VectorLayer<VectorSource>) {
    MapStore.removeLayer(layer);
    LayersStore.removeAuxLayer();
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
