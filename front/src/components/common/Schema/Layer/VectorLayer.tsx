import {
  createContext,
  memo,
  PropsWithChildren,
  useEffect,
  useMemo,
} from "react";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { StyleLike } from "ol/style/Style";
import { Feature as IFeature, Polygon as IPolygon } from "@turf/turf";
import { Feature } from "ol";

import { LayersService } from "../../../../services/map";
import { Polygon } from "ol/geom";

export const SourceContext = createContext<VectorSource | undefined>(undefined);

interface Props extends PropsWithChildren {
  id: string;
  style?: StyleLike;
  data?: IFeature<IPolygon>[];
}

const VectorLayer = ({ children, id, style, data }: Props) => {
  const vectorSource = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
      features: data?.map((item) => {
        const feature = new Feature();
        feature.setGeometry(new Polygon(item.geometry.coordinates));

        feature.set("id", item.id);

        if (item.properties?.style) {
          feature.setStyle(item.properties.style);
        } else {
          feature.setStyle(style);
        }

        return feature;
      }),
    });
  }, [data]);

  useEffect(() => {
    LayersService.createVectorLayer(vectorSource, id, style);

    return () => {
      LayersService.removeVectorLayer(id);
    };
  }, [vectorSource]);

  return (
    <SourceContext.Provider value={vectorSource}>
      {children}
    </SourceContext.Provider>
  );
};

export default memo(VectorLayer);
