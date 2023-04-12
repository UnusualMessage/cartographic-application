import { observer } from "mobx-react-lite";

import { useLayer } from "@shared/lib";
import { LayersStore, LayersService } from "@shared/misc";

const BaseLayer = () => {
  const type = LayersStore.baseLayerType;

  useLayer(() => LayersService.createBaseLayer(), [type]);

  return <></>;
};

export default observer(BaseLayer);
