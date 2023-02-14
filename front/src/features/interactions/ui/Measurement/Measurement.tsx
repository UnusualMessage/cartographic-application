import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { useInteraction } from "@shared/lib";
import {
  AddInteractionCallback,
  MapStore,
  DrawingStore,
  InteractionsStore,
} from "@shared/misc";

import { SourceContext } from "../../../layers/ui/VectorLayer/VectorLayer";

const Measurement = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = DrawingStore.interactionType;

  const addInteraction: AddInteractionCallback = (map, source) => {
    return InteractionsStore.setupMeasurementTool(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  if (!InteractionsStore.isAuxInteractionsActive) {
    return <></>;
  }

  return <></>;
};
export default observer(Measurement);
