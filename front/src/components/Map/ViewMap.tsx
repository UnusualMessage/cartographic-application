import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";

import { wrapper } from "./map.module.scss";

import View from "./View";
import { AuxLayer, TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./MapWrapper";
import { ViewControls } from "./Controls";
import AuxInteractions from "./Interactions/AuxInteractions";
import { InteractionsStore } from "../../stores";

const ViewMap = () => {
  const handle = useFullScreenHandle();
  const measurementActive = InteractionsStore.measurementActive;

  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />

        <TileLayer />
        <VectorLayer />

        {measurementActive ? (
          <AuxLayer>
            <AuxInteractions />
          </AuxLayer>
        ) : (
          <></>
        )}

        <ViewControls handle={handle} />
      </MapWrapper>
    </FullScreen>
  );
};

export default observer(ViewMap);
