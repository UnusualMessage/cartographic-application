import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { default as OLVectorLayer } from "ol/layer/Vector";
import { createContext, PropsWithChildren, useEffect } from "react";

import LayersStore from "../../stores/LayersStore";
import MapStore from "../../stores/MapStore";

interface Props extends PropsWithChildren {
  name: string;
}

export const SourceContext = createContext<VectorSource | undefined>(undefined);

const VectorLayer = ({ name, children }: Props) => {
  const vectorSource = new VectorSource({
    format: new GeoJSON(),
  });

  const vectorLayer = new OLVectorLayer({
    source: vectorSource,
  });

  useEffect(() => {
    const createdLayer = LayersStore.createLayer(vectorLayer, name);
    MapStore.addLayer(createdLayer);
  }, []);

  return <SourceContext.Provider value={vectorSource}>{children}</SourceContext.Provider>;
};

export default VectorLayer;
