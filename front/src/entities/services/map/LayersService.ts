import { FeatureLike } from "ol/Feature";
import BaseLayer from "ol/layer/Base";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";

import { BaseLayerType } from "@shared/api/types/common";

import { FeaturesStore, LayersStore, MapStore } from "../../stores/map";

class LayersService {
  public createVectorLayer(
    source: VectorSource,
    id: string,
    style?: StyleLike
  ) {
    const layer = LayersStore.createVectorLayer(source, id, style);
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

  public removeVectorLayer(id: string) {
    const layer = LayersStore.getVectorLayerById(id);

    if (layer) {
      MapStore.removeLayer(layer);
      LayersStore.removeVectorLayer(id);
    }
  }

  public removeBaseLayer(layer: BaseLayer) {
    MapStore.removeLayer(layer);
  }

  public removeFeatureFromLayer(feature: FeatureLike, id: string) {
    FeaturesStore.removeFeature(feature);
    LayersStore.removeFeatureFromLayer(feature, id);
  }
}

export default new LayersService();
