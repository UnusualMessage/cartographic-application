import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { InteractionsStore, MapStore } from "@features/Schema/model/stores";
import DrawingStore from "@features/Schema/model/stores/DrawingStore";
import { useInteraction } from "@shared/lib";
import { AddEventListener } from "@shared/lib/hooks/useInteraction";

import { SourceContext } from "../../../layers/ui/VectorLayer/VectorLayer";

const Measurement = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = DrawingStore.interactionType;

  const addInteraction: AddEventListener = (map, source) => {
    return InteractionsStore.setupMeasurementTool(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  if (!InteractionsStore.isAuxInteractionsActive) {
    return <></>;
  }

  return <></>;
};
export default observer(Measurement);
