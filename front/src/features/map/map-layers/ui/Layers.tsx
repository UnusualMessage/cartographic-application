import { observer } from "mobx-react-lite";

import { EquipmentStore, GeozonesStore } from "@entities/business";
import {
  WfsVectorLayer,
  Drawing,
  Measurement,
  BaseLayer,
  WeatherLayer,
  VectorLayer,
} from "@entities/map";
import {
  geozonesLayerId,
  measurementLayerId,
  transportLayerId,
} from "@shared/constants";
import {
  getMeasurementStyle,
  getEquipmentStyle,
  getGeozoneStyle,
  borderStyle,
} from "@shared/lib";

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

      <WfsVectorLayer
        id={"admin_level_4"}
        style={borderStyle}
        maxZoom={10}
        minZoom={7}
      />

      <WfsVectorLayer
        id={"admin_level_6"}
        style={borderStyle}
        maxZoom={15}
        minZoom={10}
      />

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
