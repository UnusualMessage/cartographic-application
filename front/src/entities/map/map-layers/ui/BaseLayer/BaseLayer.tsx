import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { LayersStore, LayersService } from "@shared/misc";

const BaseLayer = () => {
  const type = LayersStore.baseLayerType;

  useEffect(() => {
    const createdLayer = LayersService.createBaseLayer(type);

    return () => {
      if (createdLayer) {
        LayersService.removeLayer(createdLayer);
      }
    };
  }, [type]);

  return <></>;
};

export default observer(BaseLayer);
