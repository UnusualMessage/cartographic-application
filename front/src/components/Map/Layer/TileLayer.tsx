import { OSM } from "ol/source";
import { default as OLTileLayer } from "ol/layer/Tile";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import LayersService from "../../../services/map/LayersService";

interface Props {
  name: string;
}

const TileLayer = ({ name }: Props) => {
  const source = new OSM();

  const tileLayer = new OLTileLayer({
    source: source,
  });

  useEffect(() => {
    const createdLayer = LayersService.createLayer(tileLayer, name);

    return () => {
      LayersService.removeLayer(createdLayer);
    };
  }, []);

  return <></>;
};

export default observer(TileLayer);
