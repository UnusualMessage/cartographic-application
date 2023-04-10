import { VectorLayer, Measurement } from "@entities/map";
import { measurementLayerId } from "@shared/constants";
import { getMeasurementStyle } from "@shared/lib";

const MeasurementLayer = () => {
  return (
    <VectorLayer id={measurementLayerId} style={getMeasurementStyle}>
      <Measurement />
    </VectorLayer>
  );
};

export default MeasurementLayer;
