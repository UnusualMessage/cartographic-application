import BaseLayer from "ol/layer/Base";
import MapStore from "../../stores/MapStore";
import LayersStore from "../../stores/LayersStore";

class LayersService {
  public removeLayer(layer: BaseLayer) {
    MapStore.removeLayer(layer);
    LayersStore.removeLayer(layer);
  }

  public createLayer(layer: BaseLayer, name: string) {
    MapStore.addLayer(layer);
    return LayersStore.createLayer(layer, name);
  }
}

export default new LayersService();
