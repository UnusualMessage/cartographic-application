import { GeoJSON } from "ol/format";
import { all } from "ol/loadingstrategy";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
import { useContext } from "react";

import { geoserverUrl, GroupContext } from "@shared/constants";
import { useLayer } from "@shared/lib";
import { LayersService } from "@shared/misc";

interface Props {
  id: string;
  minZoom?: number;
  maxZoom?: number;
  style?: StyleLike;
}

const WfsVectorLayer = ({ id, style, minZoom, maxZoom }: Props) => {
  const group = useContext(GroupContext);

  const source = new VectorSource({
    format: new GeoJSON(),
    url: `${geoserverUrl}?service=WFS&version=1.0.0&request=GetFeature&typeName=agrosoft:${id}&outputFormat=application/json`,
    strategy: all,
  });

  useLayer(() => {
    const layer = LayersService.createVectorLayer(
      source,
      id,
      style,
      minZoom,
      maxZoom
    );

    if (group) {
      const layers = group.getLayers();
      layers.push(layer);
    }

    return layer;
  }, [id, source, minZoom, maxZoom]);

  return <></>;
};

export default WfsVectorLayer;
