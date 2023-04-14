import LayerGroup from "ol/layer/Group";
import { PropsWithChildren } from "react";

import { GroupContext } from "@shared/constants";
import { useLayer } from "@shared/lib";

interface Props extends PropsWithChildren {
  id: string;
}

const LayersGroup = ({ id, children }: Props) => {
  const group = new LayerGroup();
  group.set("id", id);

  useLayer(() => group, [id, group]);

  return (
    <GroupContext.Provider value={group}>{children}</GroupContext.Provider>
  );
};

export default LayersGroup;
