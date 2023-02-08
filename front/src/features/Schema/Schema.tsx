import { observer } from "mobx-react-lite";
import { StyleLike } from "ol/style/Style";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { GeozonesStore } from "@entities/geozone";
import { InteractionsStore } from "@features/Schema/model/stores";
import { ControlsStore } from "@shared/api";
import { auxLayerId, geozonesLayerId } from "@shared/constants";
import { getMeasurementStyle } from "@shared/lib";
import Condition from "@shared/ui/Condition";

import { wrapper } from "./schema.module.scss";
import { Controls } from "./ui/Controls";
import { AuxInteractions, GeozonesInteractions } from "./ui/Interactions";
import { TileLayer, VectorLayer } from "./ui/Layer";
import MapWrapper from "./ui/Map";
import Menu from "./ui/Menu";
import View from "./ui/View";

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
