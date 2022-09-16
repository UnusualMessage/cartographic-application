import { useEffect, useRef } from "react";
import { Overlay as OLOverlay } from "ol";

import css from "./overlay.module.scss";

import MapStore from "../../stores/MapStore";
import { overlayId, overlayOffset } from "../../assets/config";
import { Paper } from "@mui/material";

const Overlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    const overlay = MapStore.getOverlayById(overlayId);
    overlay?.setPosition(undefined);
  };

  useEffect(() => {
    const element = overlayRef.current as HTMLDivElement;

    const overlay = new OLOverlay({
      element: element,
      offset: overlayOffset,
      id: overlayId,
    });

    MapStore.addOverlay(overlay);
  }, []);

  return (
    <Paper
      elevation={24}
      className={css.wrapper}
      ref={overlayRef}
      onClick={onClick}
    >
      <span>112421412412421412412414</span>
    </Paper>
  );
};

export default Overlay;
