import { EditControls } from "./Controls";
import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import Interactions from "./Interactions";
import MapWrapper from "./MapWrapper";
import ContextMenu from "./ContextMenu";
import Overlay from "./Overlay";

const EditMap = () => {
  return (
    <MapWrapper>
      <EditControls />
      <View />
      <TileLayer name={"base"} />

      <VectorLayer name={"draw"}>
        <Interactions />
      </VectorLayer>

      <ContextMenu />
      <Overlay />
    </MapWrapper>
  );
};

export default EditMap;
