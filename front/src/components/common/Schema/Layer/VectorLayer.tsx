import { createContext, PropsWithChildren, useEffect, useMemo } from "react";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { StyleLike } from "ol/style/Style";
import { Geometry as IGeometry } from "@turf/turf";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
import { Coordinate } from "ol/coordinate";

import { LayersService } from "../../../../services/map";

export const SourceContext = createContext<VectorSource | undefined>(undefined);

interface Props extends PropsWithChildren {
  id: string;
  style?: StyleLike;
  data?: IGeometry[];
}

const VectorLayer = ({ children, id, style, data }: Props) => {
  const vectorSource = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
      features: data?.map((item) => {
        const feature = new Feature();

        switch (item.type) {
          case "Polygon":
            feature.setGeometry(new Polygon(item.coordinates as Coordinate));
            break;
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
  }, [data]);

  return (
    <SourceContext.Provider value={vectorSource}>
      {children}
    </SourceContext.Provider>
  );
};

export default VectorLayer;
