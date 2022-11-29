import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import { StyleLike } from "ol/style/Style";

import { wrapper } from "./schema.module.scss";

import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./Map";
import { Controls } from "./Controls";
import { auxLayerId, geozonesLayerId } from "../../../assets/map/config";
import { AuxInteractions, GeozonesInteractions } from "./Interactions";
import Menu from "./Menu";
import { measureStyleFunction } from "../../../utils/styles/measureStyleFunction";

const Schema = () => {
  const handle = useFullScreenHandle();

  const styleFunction: StyleLike = (feature) => {
    return measureStyleFunction(feature, 0);
  };

  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />
        <Menu />
        <Controls handle={handle} />

        <TileLayer />

        <VectorLayer id={geozonesLayerId}>
          <GeozonesInteractions />
        </VectorLayer>

        <VectorLayer id={auxLayerId} style={styleFunction}>
          <AuxInteractions />
        </VectorLayer>
      </MapWrapper>
    </FullScreen>
  );
};

export default observer(Schema);
