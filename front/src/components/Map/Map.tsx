import classNames from "classnames";
import { PropsWithChildren, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { observer } from "mobx-react-lite";

import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";

import css from "./map.module.scss";

import MapStore from "../../stores/MapStore";
import LayersStore from "../../stores/LayersStore";
import ViewStore from "../../stores/ViewStore";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { getRenderPixel } from "ol/render";

const Map = ({ children }: PropsWithChildren) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [viewParams, setViewParams] = useSearchParams();

  useEffect(() => {
    const x = viewParams.get("x") ?? "0";
    const y = viewParams.get("y") ?? "0";
    const zoom = viewParams.get("z") ?? "1";

    const baseSource = new OSM();

    const vectorSource = new VectorSource({
      format: new GeoJSON(),
    });

    const baseLayer = new TileLayer({
      source: baseSource,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    ViewStore.createView(Number(zoom), [Number(x), Number(y)]);
    LayersStore.createLayer(baseLayer, "base");
    LayersStore.createLayer(vectorLayer, "draw");
    
    const view = ViewStore.getView;
    const layers = LayersStore.getLayers;

    if (mapRef.current === null || view === null) {
      return;
    }

    MapStore.initMap(view, layers, mapRef.current);
    MapStore.initInteractions(vectorSource);

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

  return (
    <div className={classNames(css.wrapper)} ref={mapRef}>
      {children}
    </div>
  );
};

export default observer(Map);
