import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { wrapper } from "./map.module.scss";

import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./MapWrapper";
import { ViewControls } from "./Controls";

const ViewMap = () => {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />
        <TileLayer />
        <VectorLayer />
        <ViewControls handle={handle} />
      </MapWrapper>
    </FullScreen>
  );
};

export default ViewMap;
