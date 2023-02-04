import { observer } from "mobx-react-lite";
import { StyleLike } from "ol/style/Style";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { ControlsStore } from "@shared/api";
import { auxLayerId, geozonesLayerId } from "@shared/constants";
import { getMeasurementStyle } from "@shared/lib";

import { Controls } from "./Controls";
import { AuxInteractions, GeozonesInteractions } from "./Interactions";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./Map";
import Menu from "./Menu";
import { wrapper } from "./schema.module.scss";
import View from "./View";
import { GeozonesStore } from "../../../../entities/stores/entities";
import { InteractionsStore } from "../../../../entities/stores/map";
import Condition from "../../../../shared/ui/Condition";

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
