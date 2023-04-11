import { observer } from "mobx-react-lite";

import { GeozonesStore } from "@entities/business";
import { VectorLayer, Drawing } from "@entities/map";
import { geozonesLayerId } from "@shared/constants";
import { getGeozoneStyle } from "@shared/lib";

const GeozonesLayer = () => {
  const features = GeozonesStore.geozones.map((geozone) => geozone.feature);

  return (
    <VectorLayer
      id={geozonesLayerId}
      features={features}
      style={getGeozoneStyle}
    >
      <Drawing />
    </VectorLayer>
  );
};

export default observer(GeozonesLayer);
