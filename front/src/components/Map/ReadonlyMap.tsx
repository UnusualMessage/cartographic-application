import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./MapWrapper";

const ReadonlyMap = () => {
  return (
    <MapWrapper>
      <View />
      <TileLayer name={"base"} />
      <VectorLayer name={"draw"} />
    </MapWrapper>
  );
};

export default ReadonlyMap;
