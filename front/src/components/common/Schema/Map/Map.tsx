import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import { wrapper } from "./map.module.scss";

import { LayersStore, MapStore } from "../../../../stores/map";
import {
  CommonEvent,
  ListenersInjector,
  MapInjector,
} from "../../../../services/listeners";
import { Interactions } from "../Interactions";

const Map = ({ children }: PropsWithChildren) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;

  useLayoutEffect(() => {
    if (mapRef.current) {
      MapStore.initMap([], mapRef.current);
    }

    LayersStore.resetVectorLayers();

    return () => {
      MapStore.dispose();
    };
  }, []);

  useEffect(() => {
    mapRef.current?.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    let cleanupCallback = () => {
      return;
    };

    if (map) {
      const injector: ListenersInjector<CommonEvent> = new MapInjector(map);
      cleanupCallback = injector.addEventListener("pointermove");
    }

    return () => {
      mapRef.current?.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });

      cleanupCallback();
    };
  }, [map]);

  return (
    <div className={wrapper} ref={mapRef}>
      {children}
    </div>
  );
};

Map.Interactions = Interactions;

export default observer(Map);
