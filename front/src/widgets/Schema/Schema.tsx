import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { Map } from "@features/map";
import { Menu } from "@features/map-context-menu";
import { Controls } from "@features/map-controls";
import { Layers } from "@features/map-layers";
import { View } from "@features/map-view";
import { ControlsStore } from "@shared/misc";

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
