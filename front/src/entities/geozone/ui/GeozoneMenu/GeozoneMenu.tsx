import { Polygon, toWgs84 } from "@turf/turf";
import { MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";

import { AlertsStore } from "@shared/misc";

import { geozoneMenu, GeozonesStore } from "../../model";

type ExportType = "4326" | "3857";

const GeozoneMenu = () => {
  const id = GeozonesStore.chosen;

  const onExport = (type: ExportType) => {
    let geometry: Polygon | undefined = undefined;
    const geozone = GeozonesStore.getById(id ?? "");

    switch (type) {
      case "3857":
        geometry = geozone?.feature.geometry;
        break;

      case "4326":
        geometry = toWgs84(geozone?.feature.geometry);
        break;
    }

    const exported = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: geometry,
          properties: {
            area: geozone?.area,
          },
        },
      ],
    };

    AlertsStore.info = JSON.stringify(exported, null, 2);
    AlertsStore.isOpen = true;
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
