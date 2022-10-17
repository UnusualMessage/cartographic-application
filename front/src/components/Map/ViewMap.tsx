import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { wrapper } from "./map.module.scss";

import View from "./View";
import { AuxLayer, TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./MapWrapper";
import { ViewControls } from "./Controls";
import { AuxInteractions } from "./Interactions";

const ViewMap = () => {
  const handle = useFullScreenHandle();
  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />

        <TileLayer />
        <VectorLayer />

        <AuxLayer>
          <AuxInteractions />
        </AuxLayer>

        <ViewControls handle={handle} />
      </MapWrapper>
    </FullScreen>
  );
};

export default ViewMap;
