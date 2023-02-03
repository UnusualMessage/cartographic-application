import { Text } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { toLonLat } from "ol/proj";

import { container, label, value, wrapper } from "./coordinates.module.scss";
import { MapStore } from "../../../../../../../entities/stores/map";

const Coordinates = () => {
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

export default observer(Coordinates);
