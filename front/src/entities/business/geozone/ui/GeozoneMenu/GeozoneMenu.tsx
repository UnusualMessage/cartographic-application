import { Feature, FeatureCollection } from "@turf/turf";
import { MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";

import { ModalsStore, Projections } from "@shared/misc";

import {
  geozoneMenu,
  GeozonesStore,
  convertGeozones,
  convertGeozone,
} from "../../model";

const GeozoneMenu = () => {
  const id = GeozonesStore.menuGeozoneId;

  const onExport = async (projection: Projections) => {
    let features: Feature[] = [];

    if (id === "tree-geozones") {
      features = convertGeozones(projection);
    } else {
      const geozone = await GeozonesStore.getById(id ?? "");

      if (!geozone) {
        return;
      }

      features.push(convertGeozone(geozone, projection));
    }

    const exported: FeatureCollection = {
      type: "FeatureCollection",
      features: features,
    };

    ModalsStore.buffer = JSON.stringify(exported, null, 2);
    ModalsStore.open();
  };

  const onClick: MenuProps["onClick"] = async (e) => {
    switch (e.key) {
      case "export-4326":
        await onExport(Projections.EPSG4326);
        break;
      case "export-3857":
        await onExport(Projections.EPSG3857);
        break;
    }
  };

  return <Menu items={geozoneMenu} selectable={false} onClick={onClick} />;
};

export default observer(GeozoneMenu);
