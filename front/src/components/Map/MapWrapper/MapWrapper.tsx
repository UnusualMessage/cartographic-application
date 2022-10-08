import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import { changed, wrapper } from "./map.module.scss";

import MapStore from "../../../stores/MapStore";
import { FeaturesChangesStore } from "../../../stores/changes";

const MapWrapper = ({ children }: PropsWithChildren) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;
  const changesCount = FeaturesChangesStore.changesCount;

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

  const classes = classNames({
    [wrapper]: true,
    [changed]: changesCount,
  });

  return (
    <div className={classes} ref={mapRef}>
      {children}
    </div>
  );
};

export default observer(MapWrapper);
