import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { StyleLike } from "ol/style/Style";

import { wrapper } from "./map.module.scss";

import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./MapWrapper";
import { ViewControls } from "./Controls";
import { AuxInteractions } from "./Interactions";
import { auxLayerId, geozonesLayerId } from "../../../assets/map/config";
import { measureStyleFunction } from "../../../utils/styles/measureStyleFunction";

const ViewMap = () => {
  const handle = useFullScreenHandle();

  const styleFunction: StyleLike = (feature) => {
    return measureStyleFunction(feature, 0);
  };

  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />

        <TileLayer />
        <VectorLayer id={geozonesLayerId} />

        <VectorLayer id={auxLayerId} style={styleFunction}>
          <AuxInteractions />
        </VectorLayer>

        <ViewControls handle={handle} />
      </MapWrapper>
    </FullScreen>
  );
};

export default ViewMap;