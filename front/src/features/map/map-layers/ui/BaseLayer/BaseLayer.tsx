import { observer } from "mobx-react-lite";

import { TileLayer } from "@entities/map";
import { createBaseSource } from "@shared/lib";
import { LayersStore } from "@shared/misc";

const BaseLayer = () => {
  const type = LayersStore.baseLayerType;
  const source = createBaseSource(type);

  return <TileLayer source={source} zIndex={-2} />;
};

export default observer(BaseLayer);
