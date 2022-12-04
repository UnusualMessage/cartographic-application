import { observer } from "mobx-react-lite";
import { Text } from "@blueprintjs/core";

import { container, label, value, wrapper } from "./location.module.scss";

import { MapStore } from "../../../../../stores/map";
import { toLonLat } from "ol/proj";

const Location = () => {
  const coordinate = toLonLat(MapStore.cursorCoordinate ?? [0, 0]);

  return (
    <div className={wrapper}>
      <div className={container}>
        <Text className={label}>{"Широта: "}</Text>
        <Text className={value}>{coordinate[1].toFixed(2)}</Text>
      </div>

      <div className={container}>
        <Text className={label}>{"Долгота: "}</Text>
        <Text className={value}>{coordinate[0].toFixed(2)}</Text>
      </div>
    </div>
  );
};

export default observer(Location);
