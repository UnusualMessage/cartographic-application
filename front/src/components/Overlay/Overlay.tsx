import { useEffect, useRef } from "react";
import { Paper } from "@mui/material";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import css from "./overlay.module.scss";

import MapStore from "../../stores/MapStore";
import OverlaysStore from "../../stores/OverlaysStore";

const Overlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const map = MapStore.getMap;
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
    [css.wrapper]: active,
    [css.hidden]: !active,
  });

  return (
    <Paper elevation={24} className={classes} ref={overlayRef}>
      <span>Информация о Feature:</span>
    </Paper>
  );
};

export default observer(Overlay);
