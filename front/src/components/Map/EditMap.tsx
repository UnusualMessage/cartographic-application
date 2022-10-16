import { EditControls } from "./Controls";
import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import Interactions from "./Interactions";
import MapWrapper from "./MapWrapper";
import ContextMenu from "./ContextMenu";

const EditMap = () => {
  return (
    <MapWrapper>
      <EditControls />
      <View />
      <TileLayer />

      <VectorLayer>
        <Interactions />
      </VectorLayer>

      <ContextMenu />
    </MapWrapper>
  );
};

export default EditMap;
