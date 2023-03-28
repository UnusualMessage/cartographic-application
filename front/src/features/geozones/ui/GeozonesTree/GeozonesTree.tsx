import { observer } from "mobx-react-lite";

import { GeozonesStore, GeozoneMenu } from "@entities/geozone";
import { Geozone } from "@shared/misc";
import { Tree } from "@shared/ui";

import {
  geozoneSelectHandler,
  geozoneClickHandler,
  getGeozoneNodes,
} from "../../model";

const GeozonesTree = () => {
  const zones = GeozonesStore.geozones;

  return (
    <Tree<Geozone>
      source={zones}
      fillNodes={getGeozoneNodes}
      onSelect={geozoneSelectHandler}
      onRightClick={geozoneClickHandler}
      menu={<GeozoneMenu />}
      defaultSelected={"tree-geozones"}
    />
  );
};

export default observer(GeozonesTree);
