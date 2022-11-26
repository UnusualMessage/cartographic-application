import { observer } from "mobx-react-lite";
import { Text } from "@blueprintjs/core";

import { wrapper } from "./location.module.scss";

import { MapStore } from "../../../../../stores/map";
import { toLonLat } from "ol/proj";

const Location = () => {
  const coordinate = toLonLat(MapStore.cursorCoordinate ?? [0, 0]);

  return (
    <div className={wrapper}>
      <Text>{`Широта: ${coordinate[0].toFixed(2)}`}</Text>
      <Text>{`Долгота: ${coordinate[1].toFixed(2)}`}</Text>
    </div>
  );
};

export default observer(Location);
