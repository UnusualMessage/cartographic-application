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
        <TileLayer name={"base"} />
        <VectorLayer name={"draw"} />
        <ViewControls handle={handle} />
      </MapWrapper>
    </FullScreen>
  );
};

export default ViewMap;
