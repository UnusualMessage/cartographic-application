import { observer } from "mobx-react-lite";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorSource from "ol/source/Vector";
import { useMemo } from "react";

import { EquipmentStore } from "@entities/business";
import { VectorLayer } from "@entities/map";
import { transportLayerId } from "@shared/constants";
import { getEquipmentStyle } from "@shared/lib";

const EquipmentsLayer = () => {
  const features = EquipmentStore.equipment.map((item) => {
    const newFeature = new Feature();
    newFeature.setGeometry(new Point(item.feature.geometry.coordinates));
    return newFeature;
  });

  const source = useMemo(() => {
    return new VectorSource({
      features: features,
    });
  }, [features]);

  return (
    <VectorLayer
      id={transportLayerId}
      source={source}
      style={getEquipmentStyle}
    />
  );
};

export default observer(EquipmentsLayer);
