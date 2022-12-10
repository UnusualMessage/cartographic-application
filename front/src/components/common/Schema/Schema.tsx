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
import { GeozonesStore } from "../../../stores/entities";
import { Fill, Stroke, Style } from "ol/style";

const Schema = () => {
  const handle = useFullScreenHandle();
  const geozones = GeozonesStore.geozones.map((item) => item.feature);

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

        <VectorLayer
          id={geozonesLayerId}
          data={geozones}
          style={
            new Style({
              fill: new Fill({
                color: "rgba(255, 255, 255, 0.2)",
              }),
              stroke: new Stroke({
                color: "rgba(0, 0, 0, 1)",
                width: 2,
              }),
            })
          }
        >
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
