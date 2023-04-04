import { centerOfMass } from "@turf/turf";
import { TreeProps } from "antd/es/tree";

import { GeozonesStore } from "@entities/geozone";
import { TabsStore, ViewStore } from "@shared/misc";

export const selectHandler: TreeProps["onSelect"] = (keys, info) => {
  const node = info.selectedNodes[0];

  switch (node.key) {
    case "tree-geozones":
      TabsStore.switchFooterTabs("footer-geozones");
      break;

    default:
      TabsStore.switchFooterTabs("footer-geozone");

      const geozone = GeozonesStore.getById(node.key.toString());

      if (geozone) {
        ViewStore.centerWithZoomTo(13)(
          centerOfMass(geozone.feature).geometry.coordinates
        );
      }
  }
};
