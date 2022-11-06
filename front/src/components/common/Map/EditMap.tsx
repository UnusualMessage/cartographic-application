import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { wrapper } from "./map.module.scss";

import { EditControls } from "./Controls";
import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import { Interactions } from "./Interactions";
import MapWrapper from "./MapWrapper";
import ContextMenu from "./ContextMenu";
import { geozonesLayerId } from "../../../assets/map/config";

const EditMap = () => {
  const handle = useFullScreenHandle();

  return (
    <FullScreen className={wrapper} handle={handle}>
      <MapWrapper>
        <EditControls />
        <View />

        <TileLayer />
        <VectorLayer id={geozonesLayerId}>
          <Interactions />
        </VectorLayer>

        <ContextMenu />
      </MapWrapper>
    </FullScreen>
  );
};

export default EditMap;
