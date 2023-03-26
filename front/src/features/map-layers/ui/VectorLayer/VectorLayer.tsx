import { Feature } from "ol";
import { Coordinate } from "ol/coordinate";
import { GeoJSON } from "ol/format";
import { Polygon, Point } from "ol/geom";
import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
import { memo, PropsWithChildren, useEffect, useMemo } from "react";

import { SourceContext } from "@shared/constants";
import { LayersService, VectorLayerFeatures } from "@shared/misc";

interface Props extends PropsWithChildren {
  id: string;
  type?: VectorLayerFeatures;
  style?: StyleLike;
  data?: Coordinate[];
}

const VectorLayer = ({ children, id, style, type, data }: Props) => {
  const vectorSource = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
      features: data?.map((coordinate) => {
        const feature = new Feature();

        switch (type) {
          case VectorLayerFeatures.points:
            feature.setGeometry(new Point(coordinate));
            break;
          case VectorLayerFeatures.polygons:
            feature.setGeometry(new Polygon(coordinate));
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
