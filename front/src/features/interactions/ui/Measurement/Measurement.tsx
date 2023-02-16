import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { useInteraction } from "@shared/lib";
import {
  AddInteractionCallback,
  MapStore,
  InteractionsStore,
  DrawStore,
} from "@shared/misc";

import { SourceContext } from "../../../layers/ui/VectorLayer/VectorLayer";

const Measurement = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = InteractionsStore.drawType;

  const addInteraction: AddInteractionCallback = (map, source) => {
    return DrawStore.setup(type, source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};
export default observer(Measurement);
