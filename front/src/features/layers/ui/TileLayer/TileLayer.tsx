import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { LayersService, LayersStore } from "../../model";

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
