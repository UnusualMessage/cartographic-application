import { observer } from "mobx-react-lite";

import { BaseLayer, WeatherLayer } from "@entities/map";

import BordersLayer from "./BordersLayer";
import EquipmentsLayer from "./EquipmentsLayer";
import GeozonesLayer from "./GeozonesLayer";
import MeasurementLayer from "./MeasurementLayer";

const Layers = () => {
  return (
    <>
      <BaseLayer />
      <WeatherLayer />
      <BordersLayer />
      <GeozonesLayer />
      <EquipmentsLayer />
      <MeasurementLayer />
    </>
  );
};

export default observer(Layers);
