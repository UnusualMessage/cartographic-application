import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { default as OLVectorLayer } from "ol/layer/Vector";
import { createContext, PropsWithChildren, useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";

import LayersService from "../../../services/map/LayersService";

interface Props extends PropsWithChildren {
  name: string;
}

export const SourceContext = createContext<VectorSource | undefined>(undefined);

const VectorLayer = ({ name, children }: Props) => {
  const vectorSource = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
    });
  }, []);

  const vectorLayer = useMemo(() => {
    return new OLVectorLayer({
      source: vectorSource,
      style: {
        "fill-color": "rgba(255, 255, 255, 0.2)",
        "stroke-color": "#ffcc33",
        "stroke-width": 2,
        "circle-radius": 7,
        "circle-fill-color": "#ffcc33",
      },
    });
  }, []);

  useEffect(() => {
    const createdLayer = LayersService.createLayer(vectorLayer, name);

    return () => {
      LayersService.removeLayer(createdLayer);
    };
  }, []);

  return (
    <SourceContext.Provider value={vectorSource}>
      {children}
    </SourceContext.Provider>
  );
};

export default observer(VectorLayer);
