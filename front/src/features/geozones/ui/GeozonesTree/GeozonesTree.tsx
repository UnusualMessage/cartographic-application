import { observer } from "mobx-react-lite";
import { v4 as uuid } from "uuid";

import { Geozone, Group } from "@shared/misc";
import { Tree } from "@shared/ui";
import { GeozoneMenu, GeozonesStore } from "entities/business";

import {
  geozoneClickHandler,
  geozoneSelectHandler,
  getGeozoneNodes,
} from "../../model";

const GeozonesTree = () => {
  const zones = GeozonesStore.geozones;

  const groups: Group<Geozone>[] = [
    {
      key: uuid(),
      label: "По порядку",
      getNodes: getGeozoneNodes,
      defaultSelected: true,
    },
  ];

  return (
    <Tree<Geozone>
      source={zones}
      groups={groups}
      onSelect={geozoneSelectHandler}
      onRightClick={geozoneClickHandler}
      menu={<GeozoneMenu />}
      defaultSelected={"tree-geozones"}
      searchable
    />
  );
};

export default observer(GeozonesTree);
