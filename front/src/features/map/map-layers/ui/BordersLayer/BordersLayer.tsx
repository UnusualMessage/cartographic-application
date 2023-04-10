import { WfsVectorLayer } from "@entities/map";
import { bordersIds } from "@shared/constants";
import { borderStyle } from "@shared/lib";

const BordersLayer = () => {
  return (
    <>
      {bordersIds.map((id) => {
        return (
          <WfsVectorLayer key={`wfs-layer-${id}`} id={id} style={borderStyle} />
        );
      })}
    </>
  );
};

export default BordersLayer;
