import { StyleLike } from "ol/style/Style";

import { GeozonesStore } from "@entities/geozone";
import { Drawing, Measurement } from "@features/interactions";
import { InteractionsStore } from "@features/interactions/model";
import { auxLayerId, geozonesLayerId } from "@shared/constants";
import { getMeasurementStyle } from "@shared/lib";
import Condition from "@shared/ui/Condition";

import TileLayer from "../TileLayer";
import VectorLayer from "../VectorLayer";

const Layers = () => {
  const geozones = GeozonesStore.geozones.map((item) => item.feature);

  const styleFunction: StyleLike = (feature) => {
    return getMeasurementStyle(feature, 0);
  };

  return (
    <>
      <TileLayer />

      <VectorLayer id={geozonesLayerId} data={geozones}>
        <Condition truthy={InteractionsStore.isGeozoneInteractionsActive}>
          <Drawing />
        </Condition>
      </VectorLayer>

      <VectorLayer id={auxLayerId} style={styleFunction}>
        <Condition truthy={InteractionsStore.isAuxInteractionsActive}>
          <Measurement />
        </Condition>
      </VectorLayer>
    </>
  );
};

export default Layers;
