import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Layers from "@features/layers/ui/Layers";
import Map from "@features/map/ui/Map";
import Menu from "@features/map-context-menu/ui/Menu";
import { Controls } from "@features/map-controls";
import View from "@features/map-view/ui/View";
import { ControlsStore } from "@shared/api";

import { wrapper } from "./schema.module.scss";

const Schema = () => {
  const handle = useFullScreenHandle();

  useEffect(() => {
    ControlsStore.fullScreenHandle = handle;
  }, []);

  return (
    <FullScreen handle={handle} className={wrapper}>
      <Map>
        <View />
        <Menu />
        <Controls />
        <Layers />
      </Map>
    </FullScreen>
  );
};

export default observer(Schema);
