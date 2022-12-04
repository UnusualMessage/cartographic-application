import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
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
import { ControlsStore } from "../../../stores/ui";

const Schema = () => {
  const handle = useFullScreenHandle();

  useEffect(() => {
    ControlsStore.fullScreenHandle = handle;
  }, []);

  const styleFunction: StyleLike = (feature) => {
    return measureStyleFunction(feature, 0);
  };

  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />
        <Menu />
        <Controls />

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
