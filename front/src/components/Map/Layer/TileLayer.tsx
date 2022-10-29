import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { LayersService } from "../../../services/map";
import { LayersStore } from "../../../stores/map";

const TileLayer = () => {
  const type = LayersStore.currentBaseLayer;

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
