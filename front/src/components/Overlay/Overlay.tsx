import { useEffect, useRef } from "react";
import { Paper } from "@mui/material";
import { observer } from "mobx-react-lite";

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
  }, [map]);

  let position = "absolute";
  if (active) {
    position = "static";
  }

  return (
    <Paper
      sx={{ position: position }}
      elevation={24}
      className={css.wrapper}
      ref={overlayRef}
    >
      <span>Информация о Feature:</span>
    </Paper>
  );
};

export default observer(Overlay);
