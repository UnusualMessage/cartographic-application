import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SourceContext } from "@shared/constants";
import { useInteraction } from "@shared/lib";
import {
  MapStore,
  InteractionsStore,
  AddInteractionCallback,
  DrawStore,
  ModifyStore,
  SelectStore,
  SnapStore,
  InteractionType,
} from "@shared/misc";

const Drawing = () => {
  const type = InteractionsStore.type;

  const props = {
    source: useContext(SourceContext),
    map: MapStore.map,
    type: InteractionsStore.type,
  };

  const addDrawInteraction: AddInteractionCallback = (map, source) => {
    return DrawStore.setup(type, source, map);
  };

  const addModifyInteraction: AddInteractionCallback = (map, source) => {
    return ModifyStore.setup(source, map);
  };

  const addSelectInteraction: AddInteractionCallback = (map, source) => {
    return SelectStore.setup(source, map);
  };

  const addSnapInteraction: AddInteractionCallback = (map, source) => {
    return SnapStore.setup(source, map);
  };

  const allowedTypes: InteractionType[] = ["cursor", "geozones"];

  useInteraction(addDrawInteraction, allowedTypes, props);
  useInteraction(addModifyInteraction, allowedTypes, props);
  useInteraction(addSelectInteraction, allowedTypes, props);
  useInteraction(addSnapInteraction, allowedTypes, props);

  return <></>;
};

export default observer(Drawing);
