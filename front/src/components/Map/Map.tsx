import classNames from "classnames";
import { PropsWithChildren, useLayoutEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import css from "./map.module.scss";

import MapStore from "../../stores/MapStore";

const Map = ({ children }: PropsWithChildren) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (mapRef.current) {
      MapStore.initMap([], mapRef.current);
    }
  }, []);

  return (
    <div className={classNames(css.wrapper)} ref={mapRef}>
      {children}
    </div>
  );
};

export default observer(Map);
