import { observer } from "mobx-react-lite";

import { EquipmentStore } from "@entities/equipment";
import { GeozonesStore } from "@entities/geozone";
import {
  geozonesLayerId,
  measurementLayerId,
  transportLayerId,
} from "@shared/constants";
import {
  getMeasurementStyle,
  getEquipmentStyle,
  getGeozoneStyle,
} from "@shared/lib";

import BaseLayer from "./BaseLayer";
import VectorLayer from "./VectorLayer";
import WeatherLayer from "./WeatherLayer";
import { Drawing, Measurement } from "../../map-interactions";

const Layers = () => {
  const geozoneFeatures = GeozonesStore.geozones.map(
    (geozone) => geozone.feature
  );

  const equipmentFeatures = EquipmentStore.equipment.map(
    (item) => item.feature
  );

  return (
    <>
      <BaseLayer />
      <WeatherLayer />

      <VectorLayer
        id={geozonesLayerId}
        features={geozoneFeatures}
        style={getGeozoneStyle}
      >
        <Drawing />
      </VectorLayer>

      <VectorLayer
        id={transportLayerId}
        features={equipmentFeatures}
        style={getEquipmentStyle}
      />

      <VectorLayer id={measurementLayerId} style={getMeasurementStyle}>
        <Measurement />
      </VectorLayer>
    </>
  );
};

export default observer(Layers);
