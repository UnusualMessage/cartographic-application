import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./MapWrapper";
import { ViewControls } from "./Controls";

const ViewMap = () => {
  return (
    <MapWrapper>
      <View />
      <TileLayer name={"base"} />
      <VectorLayer name={"draw"} />
      <ViewControls />
    </MapWrapper>
  );
};

export default ViewMap;
