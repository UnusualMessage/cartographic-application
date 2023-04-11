import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { LayersStore, LayersService } from "@shared/misc";

const WeatherLayer = () => {
  const type = LayersStore.weatherLayerType;

  useEffect(() => {
    const createdLayer = LayersService.createWeatherLayer(type);

    return () => {
      LayersService.removeLayer(createdLayer);
    };
  }, [type]);

  return <></>;
};

export default observer(WeatherLayer);
