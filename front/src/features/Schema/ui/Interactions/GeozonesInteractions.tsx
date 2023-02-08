import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { InteractionsStore, MapStore } from "@features/Schema/model/stores";
import DrawingStore from "@features/Schema/model/stores/DrawingStore";
import {
  AddEventListener,
  InteractionProps,
  useInteraction,
} from "@shared/lib/hooks/useInteraction";

import Interactions from "./Interactions";
import { SourceContext } from "../Layer/VectorLayer";

const GeozonesInteractions = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = DrawingStore.interactionType;

  const props = {
    source,
    map,
    type,
  };

  if (!InteractionsStore.isGeozoneInteractionsActive) {
    return <></>;
  }

  return (
    <Interactions>
      <Draw {...props} />
      <Select {...props} />
      <Modify {...props} />
      <Snap {...props} />
    </Interactions>
  );
};

const Draw = ({ source, map, type }: InteractionProps) => {
  const addInteraction: AddEventListener = (map, source) => {
    return InteractionsStore.addDraw(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Select = ({ source, map, type }: InteractionProps) => {
  const addInteraction: AddEventListener = (map, source) => {
    return InteractionsStore.addSelectAndTranslate(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Modify = ({ source, map, type }: InteractionProps) => {
  const addInteraction: AddEventListener = (map, source) => {
    return InteractionsStore.addModify(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Snap = ({ source, map, type }: InteractionProps) => {
  const addInteraction: AddEventListener = (map, source) => {
    return InteractionsStore.addSnap(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

export default observer(GeozonesInteractions);
