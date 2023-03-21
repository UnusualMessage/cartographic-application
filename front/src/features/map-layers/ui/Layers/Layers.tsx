import { observer } from "mobx-react-lite";
import { StyleLike } from "ol/style/Style";

import { GeozonesStore } from "@entities/geozone";
import { geozonesLayerId, measurementLayerId } from "@shared/constants";
import { getMeasurementStyle } from "@shared/lib";
import { InteractionsStore } from "@shared/misc";
import { Condition } from "@shared/ui";

import { Drawing, Measurement } from "../../../map-interactions";
import BaseLayer from "../BaseLayer";
import VectorLayer from "../VectorLayer";
import WeatherLayer from "../WeatherLayer";

const Layers = () => {
  const geozones = GeozonesStore.geozones.map((item) => item.feature);

  const measurementStyleFunction: StyleLike = (feature) => {
    return getMeasurementStyle(feature, 0);
  };

  return (
    <>
      <BaseLayer />
      <WeatherLayer />

      <VectorLayer id={geozonesLayerId} data={geozones}>
        <Condition truthy={InteractionsStore.isGeozonesActive}>
          <Drawing />
        </Condition>
      </VectorLayer>

      <VectorLayer id={measurementLayerId} style={measurementStyleFunction}>
        <Condition truthy={InteractionsStore.isMeasurementActive}>
          <Measurement />
        </Condition>
      </VectorLayer>
    </>
  );
};

export default observer(Layers);
