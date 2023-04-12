import BaseLayer from "ol/layer/Base";
import { useEffect, DependencyList } from "react";

import { LayersService } from "../../misc";

type CreateLayerAction = () => BaseLayer;

export const useLayer = (
  createLayer: CreateLayerAction,
  dependencies: DependencyList
) => {
  useEffect(() => {
    const createdLayer = createLayer();

    return () => {
      LayersService.removeLayer(createdLayer);
    };
  }, dependencies);
};
