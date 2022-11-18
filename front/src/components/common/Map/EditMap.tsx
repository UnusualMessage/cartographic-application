import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { wrapper } from "./map.module.scss";

import { EditControls } from "./Controls";
import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import { Interactions } from "./Interactions";
import MapWrapper from "./MapWrapper";
import { MapMenu } from "../../menus";
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

        <MapMenu />
      </MapWrapper>
    </FullScreen>
  );
};

export default EditMap;
