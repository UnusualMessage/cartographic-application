import {
  Feature as IFeature,
  Point as IPoint,
  Polygon as IPolygon,
} from "@turf/helpers";
import { Feature } from "ol";
import { GeoJSON } from "ol/format";
import { Polygon, Point } from "ol/geom";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
import { memo, PropsWithChildren, useEffect, useMemo } from "react";

import { SourceContext } from "@shared/constants";
import { LayersService } from "@shared/misc";

interface Props extends PropsWithChildren {
  id: string;
  features?: IFeature<IPoint | IPolygon>[];
  style?: StyleLike;
}

const VectorLayer = ({ children, id, style, features }: Props) => {
  const vectorSource = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
      features: features?.map((feature) => {
        const newFeature = new Feature();

        switch (feature.geometry.type) {
          case "Point":
            newFeature.setGeometry(new Point(feature.geometry.coordinates));
            break;
          case "Polygon":
            newFeature.setGeometry(new Polygon(feature.geometry.coordinates));
        }

        return newFeature;
      }),
    });
  }, [features]);

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
