import { WfsVectorLayer, LayersGroup } from "@entities/map";
import { bordersIds, bordersLayerId } from "@shared/constants";
import { borderStyle } from "@shared/lib";

const BordersLayer = () => {
  return (
    <LayersGroup id={bordersLayerId}>
      {bordersIds.map((id) => {
        return (
          <WfsVectorLayer key={`wfs-layer-${id}`} id={id} style={borderStyle} />
        );
      })}
    </LayersGroup>
  );
};

export default BordersLayer;
