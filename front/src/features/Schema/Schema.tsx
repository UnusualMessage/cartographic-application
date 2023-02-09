import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Layers from "@features/layers/ui/Layers";
import { ControlsStore } from "@shared/api";

import { wrapper } from "./schema.module.scss";
import { Controls } from "./ui/Controls";
import MapWrapper from "./ui/Map";
import Menu from "./ui/Menu";
import View from "./ui/View";

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
