import {
  Feature as IFeature,
  Point as IPoint,
  Polygon as IPolygon,
} from "@turf/helpers";
import { Feature } from "ol";
import { Polygon, Point } from "ol/geom";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
import { memo, PropsWithChildren, useMemo } from "react";

import { SourceContext } from "@shared/constants";
import { useLayer } from "@shared/lib";
import { LayersService } from "@shared/misc";

interface Props extends PropsWithChildren {
  id: string;
  features?: (IFeature<IPoint | IPolygon> | undefined)[];
  style?: StyleLike;
}

const VectorLayer = ({ children, id, style, features }: Props) => {
  const vectorSource = useMemo(() => {
    return new VectorSource({
      features: features?.map((feature) => {
        const newFeature = new Feature();

        switch (feature?.geometry.type) {
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

  useLayer(
    () => LayersService.createVectorLayer(vectorSource, id, style),
    [vectorSource]
  );

  return (
    <SourceContext.Provider value={vectorSource}>
      {children}
    </SourceContext.Provider>
  );
};

export default memo(VectorLayer);
