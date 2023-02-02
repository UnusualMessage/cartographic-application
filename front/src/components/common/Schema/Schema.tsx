import { observer } from "mobx-react-lite";
import { StyleLike } from "ol/style/Style";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { auxLayerId, geozonesLayerId } from "../../../assets/config/map";
import { GeozonesStore } from "../../../stores/entities";
import { InteractionsStore } from "../../../stores/map";
import { ControlsStore } from "../../../stores/ui";
import { getMeasurementStyle } from "../../../utils/styles/getMeasurementStyle";
import Condition from "../../auxiliary/Condition";
import { Controls } from "./Controls";
import { AuxInteractions, GeozonesInteractions } from "./Interactions";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./Map";
import Menu from "./Menu";
import { wrapper } from "./schema.module.scss";
import View from "./View";

const Schema = () => {
  const handle = useFullScreenHandle();
  const geozones = GeozonesStore.geozones.map((item) => item.feature);

  useEffect(() => {
    ControlsStore.fullScreenHandle = handle;
  }, []);

  const styleFunction: StyleLike = (feature) => {
    return getMeasurementStyle(feature, 0);
  };

  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />
        <Menu />
        <Controls />

        <TileLayer />

        <VectorLayer id={geozonesLayerId} data={geozones}>
          <Condition truthy={InteractionsStore.isGeozoneInteractionsActive}>
            <GeozonesInteractions />
          </Condition>
        </VectorLayer>

        <VectorLayer id={auxLayerId} style={styleFunction}>
          <Condition truthy={InteractionsStore.isAuxInteractionsActive}>
            <AuxInteractions />
          </Condition>
        </VectorLayer>
      </MapWrapper>
    </FullScreen>
  );
};

export default observer(Schema);
