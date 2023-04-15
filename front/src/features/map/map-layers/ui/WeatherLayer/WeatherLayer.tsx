import { observer } from "mobx-react-lite";

import { TileLayer } from "@entities/map";
import { createWeatherSource } from "@shared/lib";
import { LayersStore } from "@shared/misc";

const WeatherLayer = () => {
  const type = LayersStore.weatherLayerType;
  const source = createWeatherSource(type);

  return <TileLayer source={source} zIndex={-1} />;
};

export default observer(WeatherLayer);
