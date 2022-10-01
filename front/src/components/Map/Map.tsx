import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import { wrapper } from "./map.module.scss";

import MapStore from "../../stores/MapStore";

interface Props extends PropsWithChildren {
  width?: string;
  height?: string;
}

const Map = ({ children, width, height }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = MapStore.getMap;

  useLayoutEffect(() => {
    if (mapRef.current) {
      MapStore.initMap([], mapRef.current);
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    }
  }, [map]);

  const mapStyle = {
    width,
    height,
  };

  return (
    <div className={wrapper} ref={mapRef} style={mapStyle}>
      {children}
    </div>
  );
};

export default observer(Map);
