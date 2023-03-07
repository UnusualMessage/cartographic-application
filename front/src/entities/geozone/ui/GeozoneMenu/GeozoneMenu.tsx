import { ExportOutlined } from "@ant-design/icons";
import { Polygon, toWgs84 } from "@turf/turf";
import { MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";

import { GeozonesStore } from "@entities/geozone";
import { AlertsStore } from "@shared/misc";

interface Props {
  id: string;
  title: string;
}

type ExportType = "4326" | "3857";

const items: MenuProps["items"] = [
  {
    label: "Экспорт",
    key: "export",
    children: [
      {
        label: "Экспорт (EPSG-4326)",
        key: "export-4326",
        icon: <ExportOutlined />,
      },

      {
        label: "Экспорт (EPSG-3857)",
        key: "export-3857",
        icon: <ExportOutlined />,
      },
    ],
  },
];

const GeozoneMenu = ({ id }: Props) => {
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

  return <Menu items={items} selectable={false} onClick={onClick} />;
};

export default observer(GeozoneMenu);
