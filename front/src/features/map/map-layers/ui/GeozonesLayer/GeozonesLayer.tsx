import { observer } from "mobx-react-lite";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
import VectorSource from "ol/source/Vector";
import { useMemo } from "react";

import { GeozonesStore } from "@entities/business";
import { VectorLayer } from "@entities/map";
import { geozonesLayerId } from "@shared/constants";
import { getGeozoneStyle } from "@shared/lib";

const GeozonesLayer = () => {
  const features = GeozonesStore.geozones.map((item) => {
    const newFeature = new Feature();

    if (item.feature) {
      newFeature.setGeometry(new Polygon(item.feature.geometry.coordinates));
    }

    return newFeature;
  });

  const source = useMemo(() => {
    return new VectorSource({
      features: features,
    });
  }, [features]);

  return (
    <VectorLayer id={geozonesLayerId} source={source} style={getGeozoneStyle}>
      <VectorLayer.Drawing />
    </VectorLayer>
  );
};

export default observer(GeozonesLayer);
