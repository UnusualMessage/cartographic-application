import { observer } from "mobx-react-lite";

import { useLayer } from "@shared/lib";
import { LayersStore, LayersService } from "@shared/misc";

const WeatherLayer = () => {
  const type = LayersStore.weatherLayerType;

  useLayer(() => LayersService.createWeatherLayer(), [type]);

  return <></>;
};

export default observer(WeatherLayer);
