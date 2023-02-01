import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";

import { MapStore, OverlaysStore } from "../../../../entities/stores/map";
import { hidden, wrapper } from "./overlay.module.scss";

const Overlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const map = MapStore.map;
  const active = OverlaysStore.isFeatureInfoActive;

  useEffect(() => {
    const element = overlayRef.current;

    if (element && map) {
      OverlaysStore.initFeatureOverlay(element, map);
    }

    return () => {
      if (map) {
        OverlaysStore.removeFeatureOverlay(map);
      }
    };
  }, [map]);

  const classes = classNames({
    [wrapper]: active,
    [hidden]: !active,
  });

  return (
    <div className={classes} ref={overlayRef}>
      <span>Информация о Feature:</span>
    </div>
  );
};

export default observer(Overlay);
