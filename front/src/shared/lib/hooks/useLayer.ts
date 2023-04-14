import BaseLayer from "ol/layer/Base";
import { useEffect, DependencyList } from "react";

import { LayersService, MapStore } from "../../misc";

type CreateLayerAction = () => BaseLayer;

export const useLayer = (
  createLayer: CreateLayerAction,
  dependencies: DependencyList
) => {
  useEffect(() => {
    const createdLayer = createLayer();
    MapStore.addLayer(createdLayer);

    return () => {
      LayersService.removeLayer(createdLayer);
    };
  }, dependencies);
};
