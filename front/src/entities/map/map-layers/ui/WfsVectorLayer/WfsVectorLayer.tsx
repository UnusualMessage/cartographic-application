import { GeoJSON } from "ol/format";
import { all } from "ol/loadingstrategy";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
import { useMemo, useEffect, useContext } from "react";

import { geoserverUrl, GroupContext } from "@shared/constants";
import { LayersService } from "@shared/misc";

interface Props {
  id: string;
  minZoom?: number;
  maxZoom?: number;
  style?: StyleLike;
}

const WfsVectorLayer = ({ id, style, minZoom, maxZoom }: Props) => {
  const group = useContext(GroupContext);

  const source = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
      url: `${geoserverUrl}?service=WFS&version=1.0.0&request=GetFeature&typeName=agrosoft:${id}&outputFormat=application/json`,
      strategy: all,
    });
  }, [id]);

  useEffect(() => {
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

    return () => {
      LayersService.removeVectorLayer(id);
    };
  }, [source]);

  return <></>;
};

export default WfsVectorLayer;
