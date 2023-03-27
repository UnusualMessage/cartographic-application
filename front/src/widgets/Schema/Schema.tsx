import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { Map } from "@features/map";
import ContextMenu from "@features/map-context-menu/ui/ContextMenu";
import { Controls } from "@features/map-controls";
import { Layers } from "@features/map-layers";
import { Tooltip } from "@features/map-tooltip";
import { View } from "@features/map-view";
import { FullScreenStore } from "@shared/misc";

import { wrapper } from "./schema.module.scss";

interface Props {
  toPrint?: boolean;
}

const Schema = ({ toPrint }: Props) => {
  const handle = useFullScreenHandle();
  const map = (
    <Map toPrint={toPrint}>
      <View />
      <ContextMenu />
      <Tooltip />
      <Controls />
      <Layers />
    </Map>
  );

  const onChange = (state: boolean) => {
    FullScreenStore.active = state;
  };

  useEffect(() => {
    FullScreenStore.handle = handle;
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
