import { observer } from "mobx-react-lite";
import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  CSSProperties,
} from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { invoke } from "@shared/lib";
import {
  Callback,
  ListenersInjector,
  MapStore,
  MapInjector,
  InteractionsStore,
  Interactions,
  CommonEvents,
  FullScreenStore,
} from "@shared/misc";

import { fullscreen, wrapper } from "./map.module.scss";

interface Props extends PropsWithChildren {
  toPrint?: boolean;
  canFullscreen?: boolean;
}

const onChange = (state: boolean) => {
  FullScreenStore.active = state;
};

const Map = ({ children, toPrint, canFullscreen }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;
  const type = InteractionsStore.type;
  const handle = useFullScreenHandle();

  if (type === Interactions.none) {
    MapStore.setDefaultCursor();
  } else {
    MapStore.setCrosshairCursor();
  }

  useLayoutEffect(() => {
    if (mapRef.current) {
      MapStore.initMap(mapRef.current);
    }

    return () => {
      MapStore.dispose();
    };
  }, []);

  useEffect(() => {
    FullScreenStore.handle = handle;

    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const cleanContextMenu = () => {
      mapRef.current?.removeEventListener("contextmenu", onContextMenu);
    };

    mapRef.current?.addEventListener("contextmenu", onContextMenu);

    let cleanPointerEvent: Callback = () => {
      return;
    };

    if (map) {
      const injector: ListenersInjector<CommonEvents> = new MapInjector(map);
      cleanPointerEvent = injector.addEventListener(CommonEvents.pointermove);
    }

    return () => {
      cleanContextMenu();
      invoke(cleanPointerEvent);
    };
  }, [map]);

  let style: CSSProperties = {};
  if (toPrint) {
    const dimensions = MapStore.dimensions;
    style = { width: `${dimensions[0]}mm`, height: `${dimensions[1]}mm` };
  }

  const mapComponent = (
    <div className={wrapper} ref={mapRef} style={style}>
      {children}
    </div>
  );

  return (
    <>
      {canFullscreen ? (
        <FullScreen handle={handle} className={fullscreen} onChange={onChange}>
          {mapComponent}
        </FullScreen>
      ) : (
        mapComponent
      )}
    </>
  );
};

export default observer(Map);
