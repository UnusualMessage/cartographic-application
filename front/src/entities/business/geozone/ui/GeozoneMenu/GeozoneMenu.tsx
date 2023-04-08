import { Feature, FeatureCollection } from "@turf/turf";
import { MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";

import { ModalsStore, GeometryType } from "@shared/misc";

import {
  geozoneMenu,
  GeozonesStore,
  convertGeozones,
  convertGeozone,
} from "../../model";

const GeozoneMenu = () => {
  const id = GeozonesStore.menuGeozoneId;

  const onExport = (type: GeometryType) => {
    let features: Feature[] = [];

    if (id === "tree-geozones") {
      features = convertGeozones(type);
    } else {
      const geozone = GeozonesStore.getById(id ?? "");

      if (!geozone) {
        return;
      }

      features.push(convertGeozone(geozone, type));
    }

    const exported: FeatureCollection = {
      type: "FeatureCollection",
      features: features,
    };

    ModalsStore.buffer = JSON.stringify(exported, null, 2);
    ModalsStore.open();
  };

  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "export-4326":
        onExport("4326");
        break;
      case "export-3857":
        onExport("3857");
        break;
    }
  };

  return <Menu items={geozoneMenu} selectable={false} onClick={onClick} />;
};

export default observer(GeozoneMenu);
