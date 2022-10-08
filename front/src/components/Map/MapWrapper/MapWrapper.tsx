import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import { changed, wrapper } from "./map.module.scss";

import MapStore from "../../../stores/MapStore";
import classNames from "classnames";
import InteractionsStore from "../../../stores/InteractionsStore";

const MapWrapper = ({ children }: PropsWithChildren) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;

  useLayoutEffect(() => {
    if (mapRef.current) {
      MapStore.initMap([], mapRef.current);
    }
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

  const classes = classNames({
    [wrapper]: true,
    [changed]: !InteractionsStore.saved,
  });

  return (
    <div className={classes} ref={mapRef}>
      {children}
    </div>
  );
};

export default observer(MapWrapper);
