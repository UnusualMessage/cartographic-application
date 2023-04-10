import { GeoJSON } from "ol/format";
import { all } from "ol/loadingstrategy";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
import { useMemo, useEffect } from "react";

import { geoserverUrl } from "@shared/constants";
import { LayersService } from "@shared/misc";

interface Props {
  id: string;
  minZoom?: number;
  maxZoom?: number;
  style?: StyleLike;
}

const WfsVectorLayer = ({ id, style, minZoom, maxZoom }: Props) => {
  const source = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
      url: `${geoserverUrl}?service=WFS&version=1.0.0&request=GetFeature&typeName=agrosoft:${id}&outputFormat=application/json`,
      strategy: all,
    });
  }, [id]);

  useEffect(() => {
    LayersService.createVectorLayer(source, id, style, minZoom, maxZoom);

    return () => {
      LayersService.removeVectorLayer(id);
    };
  }, [source]);

  return <></>;
};

export default WfsVectorLayer;
