import classNames from "classnames";
import { observer } from "mobx-react-lite";
import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  CSSProperties,
} from "react";

import { invoke } from "@shared/lib";
import {
  Callback,
  CommonEvent,
  ListenersInjector,
  MapStore,
  LayersStore,
  MapInjector,
  InteractionsStore,
  ControlsStore,
} from "@shared/misc";

import { wrapper } from "./map.module.scss";

const Map = ({ children }: PropsWithChildren) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;
  const measurementActive = InteractionsStore.isMeasurementActive;

  if (measurementActive) {
    MapStore.setCrosshairCursor();
  } else {
    MapStore.setDefaultCursor();
  }

  useLayoutEffect(() => {
    if (mapRef.current) {
      MapStore.initMap(mapRef.current);
    }

    LayersStore.resetVectorLayers();

    return () => {
      MapStore.dispose();
    };
  }, []);

  useEffect(() => {
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
      const injector: ListenersInjector<CommonEvent> = new MapInjector(map);
      cleanPointerEvent = injector.addEventListener("pointermove");
    }

    return () => {
      cleanContextMenu();
      invoke(cleanPointerEvent);
    };
  }, [map]);

  const classes = classNames({
    [wrapper]: true,
  });

  let style: CSSProperties = {};
  if (ControlsStore.fullScreenActive) {
    style = { width: "297mm", height: "210mm" };
  }

  return (
    <div className={classes} ref={mapRef} style={style}>
      {children}
    </div>
  );
};

export default observer(Map);
