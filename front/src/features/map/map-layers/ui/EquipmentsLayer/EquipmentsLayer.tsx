import { observer } from "mobx-react-lite";

import { EquipmentStore } from "@entities/business";
import { VectorLayer } from "@entities/map";
import { transportLayerId } from "@shared/constants";
import { getEquipmentStyle } from "@shared/lib";

const EquipmentsLayer = () => {
  const features = EquipmentStore.equipment.map((item) => item.feature);

  return (
    <VectorLayer
      id={transportLayerId}
      features={features}
      style={getEquipmentStyle}
    />
  );
};

export default observer(EquipmentsLayer);
