import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { MapStore } from "@features/map/model";
import {
  AddEventListener,
  InteractionProps,
  useInteraction,
} from "@shared/lib/hooks/useInteraction";

import { SourceContext } from "../../../layers/ui/VectorLayer/VectorLayer";
import { DrawingStore } from "../../model";
import InteractionsStore from "../../model/InteractionsStore";

const Drawing = () => {
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
    <>
      <Draw {...props} />
      <Select {...props} />
      <Modify {...props} />
      <Snap {...props} />
    </>
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

export default observer(Drawing);
