import { Tag } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Ref, useRef, useEffect, MouseEvent } from "react";

import { measurementLayerId } from "@shared/constants";
import { invoke } from "@shared/lib";
import { MapStore, TooltipStore, Callback, LayersStore } from "@shared/misc";

import { hidden } from "./tooltip.module.scss";

const Tooltip = () => {
  const tooltipRef: Ref<HTMLDivElement> = useRef(null);
  const map = MapStore.map;
  const active = TooltipStore.active;
  const text = TooltipStore.text;

  const onClose = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    TooltipStore.hide();
    LayersStore.clearVectorLayer(measurementLayerId);
  };

  useEffect(() => {
    const element = tooltipRef.current;

    let cleanups: Callback[] = [];
    if (element && map) {
      cleanups = TooltipStore.init(element, map);
    }

    return () => {
      for (const cleanup of cleanups) {
        invoke(cleanup);
      }
    };
  }, [map]);

  const classes = classNames({
    [hidden]: !active,
  });

  return (
    <div className={classes} ref={tooltipRef}>
      <Tag closable color={"#000000"} onClose={onClose}>
        {text}
      </Tag>
    </div>
  );
};

export default observer(Tooltip);
