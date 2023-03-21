import { Typography } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Ref, useRef, useEffect } from "react";

import { invoke } from "@shared/lib";
import { MapStore, TooltipStore, Callback } from "@shared/misc";

import { wrapper, hidden } from "./tooltip.module.scss";

const { Text } = Typography;

const Tooltip = () => {
  const tooltipRef: Ref<HTMLDivElement> = useRef(null);
  const map = MapStore.map;
  const active = TooltipStore.active;
  const text = "hello";

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
    [wrapper]: active,
  });

  return (
    <div className={classes} ref={tooltipRef}>
      <Text>{text}</Text>
    </div>
  );
};

export default observer(Tooltip);
