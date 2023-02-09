import { observer } from "mobx-react-lite";
import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";

import { LayersStore } from "@features/layers";
import { Callback, CommonEvent, ListenersInjector } from "@shared/api";

import { wrapper } from "./map.module.scss";
import { MapInjector, MapStore } from "../../model";

const Map = ({ children }: PropsWithChildren) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;

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

      if (cleanPointerEvent) {
        cleanPointerEvent();
      }
    };
  }, [map]);

  return (
    <div className={wrapper} ref={mapRef}>
      {children}
    </div>
  );
};

export default observer(Map);
