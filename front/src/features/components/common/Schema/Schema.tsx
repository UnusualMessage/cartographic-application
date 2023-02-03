import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { StyleLike } from "ol/style/Style";

import { wrapper } from "./schema.module.scss";

import View from "./View";
import { TileLayer, VectorLayer } from "./Layer";
import MapWrapper from "./Map";
import { Controls } from "./Controls";
import {
  auxLayerId,
  geozonesLayerId,
} from "../../../../shared/assets/map/config";
import { AuxInteractions, GeozonesInteractions } from "./Interactions";
import Menu from "./Menu";
import { getMeasurementStyle } from "../../../../shared/lib";
import { ControlsStore } from "../../../../entities/stores/ui";
import { GeozonesStore } from "../../../../entities/stores/entities";
import Condition from "../../../../shared/ui/Condition";
import { InteractionsStore } from "../../../../entities/stores/map";

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
