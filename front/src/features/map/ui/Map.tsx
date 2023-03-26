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
} from "@shared/misc";

import { wrapper } from "./map.module.scss";

interface Props extends PropsWithChildren {
  toPrint?: boolean;
}

const Map = ({ children, toPrint }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;
  const measurementActive = InteractionsStore.isMeasurementActive;
  const geozonesActive = InteractionsStore.isGeozonesActive;

  if (measurementActive || geozonesActive) {
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

  let style: CSSProperties = {};
  if (toPrint) {
    const dimensions = MapStore.dimensions;
    style = { width: `${dimensions[0]}mm`, height: `${dimensions[1]}mm` };
  }

  return (
    <div className={wrapper} ref={mapRef} style={style}>
      {children}
    </div>
  );
};

export default observer(Map);
