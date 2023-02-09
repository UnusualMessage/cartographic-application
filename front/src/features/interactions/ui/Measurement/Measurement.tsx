import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { MapStore } from "@features/map/model";
import { useInteraction } from "@shared/lib";
import { AddEventListener } from "@shared/lib/hooks/useInteraction";

import { SourceContext } from "../../../layers/ui/VectorLayer/VectorLayer";
import { DrawingStore, InteractionsStore } from "../../model";

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
