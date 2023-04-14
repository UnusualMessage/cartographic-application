import BaseLayer from "ol/layer/Base";
import LayerGroup from "ol/layer/Group";
import { useEffect, DependencyList } from "react";

import { LayersService, MapStore } from "../../misc";

type CreateLayerAction = () => BaseLayer;

export const useLayer = (
  createLayer: CreateLayerAction,
  group?: LayerGroup,
  dependencies?: DependencyList
) => {
  useEffect(() => {
    const createdLayer = createLayer();

    if (group) {
      const layers = group.getLayers();
      layers.push(createdLayer);
    }

    MapStore.addLayer(createdLayer);

    return () => {
      LayersService.removeLayer(createdLayer);
    };
  }, dependencies);
};
