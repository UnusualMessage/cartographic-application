import LayerGroup from "ol/layer/Group";
import { PropsWithChildren, useEffect } from "react";

import { GroupContext } from "@shared/constants";
import { LayersService } from "@shared/misc";

interface Props extends PropsWithChildren {
  id: string;
}

const LayersGroup = ({ id, children }: Props) => {
  const group = new LayerGroup();
  group.set("id", id);

  useEffect(() => {
    LayersService.addLayerGroup(group);

    return () => {
      LayersService.removeGroupLayer(id);
    };
  }, [id, group]);

  return (
    <GroupContext.Provider value={group}>{children}</GroupContext.Provider>
  );
};

export default LayersGroup;
