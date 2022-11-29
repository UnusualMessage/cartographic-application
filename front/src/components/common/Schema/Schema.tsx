import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import { StyleLike } from "ol/style/Style";

import { wrapper } from "./schema.module.scss";

import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./Map";
import { Controls } from "./Controls";
import { auxLayerId, geozonesLayerId } from "../../../assets/map/config";
import { measureStyleFunction } from "../../../utils/styles/measureStyleFunction";
import { InteractionsStore } from "../../../stores/map";
import { MapMenu } from "../../menus";
import { AuxInteractions, Interactions } from "./Interactions";

const Schema = () => {
  const handle = useFullScreenHandle();

  const styleFunction: StyleLike = (feature) => {
    return measureStyleFunction(feature, 0);
  };

  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />

        <TileLayer />
        <VectorLayer id={geozonesLayerId}>
          {InteractionsStore.isGeozoneInteractionsActive ? (
            <Interactions />
          ) : (
            <></>
          )}
        </VectorLayer>

        <VectorLayer id={auxLayerId} style={styleFunction}>
          {InteractionsStore.isAuxInteractionsActive ? (
            <AuxInteractions />
          ) : (
            <></>
          )}
        </VectorLayer>

        <MapMenu />

        <Controls handle={handle} />
      </MapWrapper>
    </FullScreen>
  );
};

export default observer(Schema);
