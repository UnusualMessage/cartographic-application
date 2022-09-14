import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { default as OLVectorLayer } from "ol/layer/Vector";
import { useEffect } from "react";

import LayersStore from "../../stores/LayersStore";
import MapStore from "../../stores/MapStore";

interface Props {
  name: string;
}

const VectorLayer = ({ name }: Props) => {
  useEffect(() => {
    const vectorSource = new VectorSource({
      format: new GeoJSON(),
    });

    const vectorLayer = new OLVectorLayer({
      source: vectorSource,
    });

    const createdLayer = LayersStore.createLayer(vectorLayer, name);
    MapStore.addLayer(createdLayer);
  }, []);

  return <></>;
};

export default VectorLayer;
