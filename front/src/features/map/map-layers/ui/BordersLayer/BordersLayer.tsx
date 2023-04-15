import { LayersGroup, VectorLayer } from "@entities/map";
import { bordersLayerId } from "@shared/constants";
import { getBorderStyle } from "@shared/lib";

import { borderSources } from "../../model";

const BordersLayer = () => {
  return (
    <LayersGroup id={bordersLayerId}>
      {borderSources.map((item) => {
        return (
          <VectorLayer
            key={item.id}
            id={item.id}
            source={item.source}
            style={getBorderStyle}
            zoom={{ min: item.minZoom, max: item.maxZoom }}
          />
        );
      })}
    </LayersGroup>
  );
};

export default BordersLayer;
