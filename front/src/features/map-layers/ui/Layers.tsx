import { observer } from "mobx-react-lite";

import { EquipmentStore } from "@entities/equipment";
import { GeozonesStore } from "@entities/geozone";
import {
  geozonesLayerId,
  measurementLayerId,
  transportLayerId,
} from "@shared/constants";
import { getMeasurementStyle, getVisibleCoordinateStyle } from "@shared/lib";
import { InteractionsStore, VectorLayerFeatures } from "@shared/misc";
import { Condition } from "@shared/ui";

import BaseLayer from "./BaseLayer";
import VectorLayer from "./VectorLayer";
import WeatherLayer from "./WeatherLayer";
import { Drawing, Measurement } from "../../map-interactions";

const Layers = () => {
  const geozones = GeozonesStore.geozones.map((item) => item.coordinates);
  const equipment = EquipmentStore.equipment.map(
    (item) => item.location ?? [0, 0]
  );

  return (
    <>
      <BaseLayer />
      <WeatherLayer />

      <VectorLayer
        id={geozonesLayerId}
        data={geozones}
        type={VectorLayerFeatures.polygons}
      >
        <Condition truthy={InteractionsStore.isGeozonesActive}>
          <Drawing />
        </Condition>
      </VectorLayer>

      <VectorLayer
        id={transportLayerId}
        data={equipment}
        type={VectorLayerFeatures.points}
        style={getVisibleCoordinateStyle}
      />

      <VectorLayer id={measurementLayerId} style={getMeasurementStyle}>
        <Condition truthy={InteractionsStore.isMeasurementActive}>
          <Measurement />
        </Condition>
      </VectorLayer>
    </>
  );
};

export default observer(Layers);
