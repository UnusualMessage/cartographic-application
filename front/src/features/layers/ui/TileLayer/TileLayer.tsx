import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { LayersService } from "@features/Schema/model/services/map";
import { LayersStore } from "@features/Schema/model/stores";

const TileLayer = () => {
  const type = LayersStore.baseLayer;

  useEffect(() => {
    const createdLayer = LayersService.createBaseLayer(type);

    return () => {
      if (createdLayer) {
        LayersService.removeBaseLayer(createdLayer);
      }
    };
  }, [type]);

  return <></>;
};

export default observer(TileLayer);
