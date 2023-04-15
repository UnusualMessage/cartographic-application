import BaseLayer from "ol/layer/Base";
import LayerGroup from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import TileSource from "ol/source/Tile";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";

import { MapStore } from "../../stores";

class LayersService {
  public createTileLayer(zIndex?: number, source?: TileSource) {
    return new TileLayer({
      source: source,
      zIndex: zIndex,
    });
  }

  public createVectorLayer(
    source: VectorSource,
    id: string,
    style?: StyleLike,
    minZoom?: number,
    maxZoom?: number
  ) {
    return new VectorLayer({
      source: source,
      style: style,
      renderBuffer: 1000,
      minZoom: minZoom,
      maxZoom: maxZoom,
      properties: {
        id: id,
      },
    });
  }

  public addLayerGroup(group: LayerGroup) {
    return group;
  }

  public clearVectorLayer(id: string) {
    const layer = MapStore.getLayerById(id);

    if (layer instanceof VectorLayer<VectorSource>) {
      layer.getSource().clear();
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
