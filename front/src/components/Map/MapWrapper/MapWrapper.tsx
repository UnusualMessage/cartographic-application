import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import { wrapper } from "./map.module.scss";

import { MapStore } from "../../../stores/map";

const MapWrapper = ({ children }: PropsWithChildren) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;

  useLayoutEffect(() => {
    if (mapRef.current) {
      MapStore.initMap([], mapRef.current);
    }

    return () => {
      MapStore.dispose();
    };
  }, []);

  useEffect(() => {
    mapRef.current?.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    return () => {
      mapRef.current?.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    };
  }, [map]);

  return (
    <div className={wrapper} ref={mapRef}>
      {children}
    </div>
  );
};

export default observer(MapWrapper);
