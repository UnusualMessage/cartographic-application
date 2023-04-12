import BaseLayer from "ol/layer/Base";
import LayerGroup from "ol/layer/Group";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";

import { createBaseLayer, createWeatherLayer } from "../../../lib";
import { LayersStore, MapStore } from "../../stores";

class LayersService {
  public createVectorLayer(
    source: VectorSource,
    id: string,
    style?: StyleLike,
    minZoom?: number,
    maxZoom?: number
  ) {
    const layer = new VectorLayer({
      source: source,
      style: style,
      renderBuffer: 1000,
      minZoom: minZoom,
      maxZoom: maxZoom,
      properties: {
        id: id,
      },
    });

    MapStore.addLayer(layer);
    return layer;
  }

  public addLayerGroup(group: LayerGroup) {
    MapStore.addLayer(group);
    LayersStore.addLayerGroup(group);
    return group;
  }

  public createBaseLayer() {
    const type = LayersStore.baseLayerType;
    const layer = createBaseLayer(type);

    MapStore.addLayer(layer);

    return layer;
  }

  public createWeatherLayer() {
    const type = LayersStore.weatherLayerType;
    const layer = createWeatherLayer(type);

    MapStore.addLayer(layer);

    return layer;
  }

  public clearVectorLayer(id: string) {
    const layer = MapStore.getLayerById(id);

    if (layer instanceof VectorLayer<VectorSource>) {
      layer.getSource().clear();
    }
  }

  public removeGroupLayer(id: string) {
    const group = LayersStore.getLayerGroupById(id);

    if (group) {
      this.removeLayer(group);
      LayersStore.removeLayerGroup(id);
    }
  }

  public removeVectorLayer(id: string) {
    const layer = MapStore.getLayerById(id);

    if (layer instanceof VectorLayer) {
      this.removeLayer(layer);
    }
  }

  public removeLayer(layer: BaseLayer) {
    MapStore.removeLayer(layer);
  }
}

export default new LayersService();
