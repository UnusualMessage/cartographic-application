import { observer } from "mobx-react-lite";

import { LayersGroup } from "@entities/map";
import { vectorsLayerId } from "@shared/constants";

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

      <LayersGroup id={vectorsLayerId}>
        <GeozonesLayer />
        <EquipmentsLayer />
        <MeasurementLayer />
      </LayersGroup>
    </>
  );
};

export default observer(Layers);
