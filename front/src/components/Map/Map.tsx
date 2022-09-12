import classNames from "classnames";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { observer } from "mobx-react-lite";

import { View } from "ol";
import { OSM } from "ol/source";
import TileLayer from "ol/layer/Tile";

import css from "./map.module.scss";
import MapStore from "../../stores/MapStore";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [viewParams, setViewParams] = useSearchParams();
  
  useEffect(() => {
    const x = viewParams.get("x") ?? "0";
    const y = viewParams.get("y") ?? "0";
    const zoom = viewParams.get("z") ?? "1";
    
    const view = new View({
      center: [Number(x), Number(y)],
      zoom: Number(zoom),
    });
    
    const layers = [
      new TileLayer({
        source: new OSM(),
      }),
    ];
    
    if (mapRef.current === null) {
      return;
    }
    
    MapStore.initMap(view, layers, mapRef.current);
    
    const onViewChange = debounce(() => {
      const center = view.getCenter();
      const zoom = view.getZoom();
      
      if (!center || !zoom) {
        return;
      }
      
      const searchParams = new URLSearchParams();
      
      searchParams.append("x", center[0].toString());
      searchParams.append("y", center[1].toString());
      searchParams.append("z", zoom.toString());
      
      setViewParams(searchParams);
    }, 100);
    
    view.on("change:center", onViewChange);
    
    return () => {
      view.un("change:center", onViewChange);
    };
  }, []);
  
  return <div className={classNames(css.wrapper)} ref={mapRef}></div>;
};

export default observer(Map);
