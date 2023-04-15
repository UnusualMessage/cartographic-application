import VectorSource from "ol/source/Vector";

import { VectorLayer } from "@entities/map";
import { measurementLayerId } from "@shared/constants";
import { getMeasurementStyle } from "@shared/lib";

const MeasurementLayer = () => {
  const source = new VectorSource();

  return (
    <VectorLayer
      id={measurementLayerId}
      source={source}
      style={getMeasurementStyle}
    >
      <VectorLayer.Measurement />
    </VectorLayer>
  );
};

export default MeasurementLayer;
