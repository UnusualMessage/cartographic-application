import TileSource from "ol/source/Tile";

import { useLayer } from "@shared/lib";
import { LayersService } from "@shared/misc";

interface Props {
  source?: TileSource;
  zIndex?: number;
}

const TileLayer = ({ source, zIndex }: Props) => {
  useLayer(() => LayersService.createTileLayer(zIndex, source), [source]);

  return <></>;
};

export default TileLayer;
