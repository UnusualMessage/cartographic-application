import { observer } from "mobx-react-lite";

import { EquipmentStore, GeozonesStore } from "@entities/business";
import { SourceType } from "@entities/map/map-layers/ui/VectorLayer/VectorLayer";
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
import {
  Drawing,
  Measurement,
  BaseLayer,
  WeatherLayer,
  VectorLayer,
} from "entities/map";

import CadastralLayer from "./CadastralLayer";

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
        type={SourceType.features}
      >
        <Drawing />
      </VectorLayer>

      <VectorLayer
        id={transportLayerId}
        features={equipmentFeatures}
        style={getEquipmentStyle}
        type={SourceType.features}
      />

      <CadastralLayer />

      <VectorLayer
        id={measurementLayerId}
        style={getMeasurementStyle}
        type={SourceType.features}
      >
        <Measurement />
      </VectorLayer>
    </>
  );
};

export default observer(Layers);
