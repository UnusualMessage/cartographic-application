import { centerOfMass } from "@turf/turf";
import { TreeProps } from "antd/es/tree";

import { GeozonesStore } from "@entities/business";
import { TabsStore, ViewStore } from "@shared/misc";

export const selectHandler: TreeProps["onSelect"] = async (keys, info) => {
  const node = info.selectedNodes[0];

  switch (node.key) {
    case "tree-geozones":
      TabsStore.switchFooterTabs("footer-geozones");
      break;

    default:
      TabsStore.switchFooterTabs("footer-geozone");

      const geozone = await GeozonesStore.getById(node.key.toString());

      if (geozone) {
        ViewStore.centerWithZoomTo(13)(
          centerOfMass(geozone.feature).geometry.coordinates
        );
      }
  }
};
