import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { Map } from "@entities/map";
import { View } from "@entities/view";
import {
  ContextMenu,
  Tooltip,
  Layers,
  MainControls,
  FastControls,
} from "@features/map";
import { FullScreenStore } from "@shared/misc";

import { wrapper } from "./schema.module.scss";

interface Props {
  toPrint?: boolean;
}

const Controls = () => {
  return (
    <>
      <MainControls />
      <FastControls />
    </>
  );
};

const onChange = (state: boolean) => {
  FullScreenStore.active = state;
};

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
