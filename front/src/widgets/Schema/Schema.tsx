import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { Map } from "@features/map";
import { Menu } from "@features/map-context-menu";
import { Controls } from "@features/map-controls";
import { Layers } from "@features/map-layers";
import { Tooltip } from "@features/map-tooltip";
import { View } from "@features/map-view";
import { ControlsStore } from "@shared/misc";

import { wrapper } from "./schema.module.scss";

interface Props {
  toPrint?: boolean;
}

const Schema = ({ toPrint }: Props) => {
  const handle = useFullScreenHandle();
  const map = (
    <Map toPrint={toPrint}>
      <View />
      <Menu />
      <Tooltip />
      <Controls />
      <Layers />
    </Map>
  );

  const onChange = (state: boolean) => {
    ControlsStore.fullScreenActive = state;
  };

  useEffect(() => {
    ControlsStore.fullScreenHandle = handle;
  }, []);

  return (
    <>
      {toPrint ? (
        map
      ) : (
        <FullScreen handle={handle} className={wrapper} onChange={onChange}>
          {map}
        </FullScreen>
      )}
    </>
  );
};

export default observer(Schema);
