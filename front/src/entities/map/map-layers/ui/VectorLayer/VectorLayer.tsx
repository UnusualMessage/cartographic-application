import {
  Feature as IFeature,
  Point as IPoint,
  Polygon as IPolygon,
} from "@turf/helpers";
import { FeatureCollection, toMercator } from "@turf/turf";
import { Feature } from "ol";
import { GeoJSON } from "ol/format";
import { Polygon, Point } from "ol/geom";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
import { memo, PropsWithChildren, useEffect, useMemo } from "react";

import { SourceContext } from "@shared/constants";
import { LayersService } from "@shared/misc";

export enum SourceType {
  geojson,
  features,
}

interface Props extends PropsWithChildren {
  id: string;
  features?: (IFeature<IPoint | IPolygon> | undefined)[];
  collection?: FeatureCollection;
  style?: StyleLike;
  type: SourceType;
}

const VectorLayer = ({
  children,
  id,
  style,
  features,
  collection,
  type,
}: Props) => {
  const vectorSource = useMemo(() => {
    switch (type) {
      case SourceType.features:
        return new VectorSource({
          features: features?.map((feature) => {
            const newFeature = new Feature();

            switch (feature?.geometry.type) {
              case "Point":
                newFeature.setGeometry(new Point(feature.geometry.coordinates));
                break;
              case "Polygon":
                newFeature.setGeometry(
                  new Polygon(feature.geometry.coordinates)
                );
            }

            return newFeature;
          }),
        });

      case SourceType.geojson:
        return new VectorSource({
          features: new GeoJSON().readFeatures(toMercator(collection)),
        });
    }
  }, [features, collection]);

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
