import { OSM } from "ol/source";
import { default as OLTileLayer } from "ol/layer/Tile";
import { useEffect } from "react";

import LayersStore from "../../stores/LayersStore";
import MapStore from "../../stores/MapStore";

interface Props {
  name: string;
}

const TileLayer = ({ name }: Props) => {
  useEffect(() => {
    const source = new OSM();

    const baseLayer = new OLTileLayer({
      source: source,
    });

    const createdLayer = LayersStore.createLayer(baseLayer, name);
    MapStore.addLayer(createdLayer);
  }, []);

  return <></>;
};

export default TileLayer;
