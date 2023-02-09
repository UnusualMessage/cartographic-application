import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Layers from "@features/layers/ui/Layers";
import { Controls } from "@features/map-controls";
import { ControlsStore } from "@shared/api";

import { wrapper } from "./schema.module.scss";
import Menu from "./ui/Menu";
import View from "./ui/View";
import MapWrapper from "../map/ui/Map";

const Schema = () => {
  const handle = useFullScreenHandle();

  useEffect(() => {
    ControlsStore.fullScreenHandle = handle;
  }, []);

  return (
    <FullScreen handle={handle} className={wrapper}>
      <MapWrapper>
        <View />
        <Menu />
        <Controls />
        <Layers />
      </MapWrapper>
    </FullScreen>
  );
};

export default observer(Schema);
