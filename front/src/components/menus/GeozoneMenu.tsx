import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { Polygon, toWgs84 } from "@turf/turf";

import { AlertsStore } from "../../stores/ui";
import { GeozonesStore } from "../../stores/entities";

interface Props {
  id: string;
  title: string;
}

type ExportType = "4326" | "3857";

const GeozoneMenu = ({ id, title }: Props) => {
  const onExport = (type: ExportType) => {
    let geometry: Polygon | undefined = undefined;
    const geozone = GeozonesStore.getById(id);

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

  return (
    <Menu>
      <MenuDivider title={title} />

      <MenuItem text={"Экспорт"} icon="export">
        <MenuItem
          icon="export"
          text="Экспорт (EPSG-4326)"
          onClick={() => onExport("4326")}
        />

        <MenuItem
          icon="export"
          text="Экспорт (EPSG-3857)"
          onClick={() => onExport("3857")}
        />
      </MenuItem>
    </Menu>
  );
};

export default observer(GeozoneMenu);
