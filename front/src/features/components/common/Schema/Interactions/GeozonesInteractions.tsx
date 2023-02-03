import { observer } from "mobx-react-lite";
import { useContext } from "react";
import VectorSource from "ol/source/Vector";
import { Map } from "ol";

import { SourceContext } from "../Layer/VectorLayer";
import { InteractionsStore, MapStore } from "../../../../../entities/stores/map";
import Interactions from "./Interactions";
import { InteractionType } from "../../../../../shared/api/types/map";
import { AddEventListener } from "../../../../../shared/lib/hooks/useInteraction";
import { useInteraction } from "../../../../../shared/lib/hooks";

const GeozonesInteractions = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = InteractionsStore.interactionType;

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

export interface InteractionProps {
  source?: VectorSource;
  map: Map | null;
  type: InteractionType;
}

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
