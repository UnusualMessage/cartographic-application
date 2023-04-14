import { observer } from "mobx-react-lite";

import BaseLayer from "./BaseLayer";
import BordersLayer from "./BordersLayer";
import EquipmentsLayer from "./EquipmentsLayer";
import GeozonesLayer from "./GeozonesLayer";
import MeasurementLayer from "./MeasurementLayer";
import WeatherLayer from "./WeatherLayer";

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
