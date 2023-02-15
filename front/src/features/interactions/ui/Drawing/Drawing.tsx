import { observer } from "mobx-react-lite";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useContext } from "react";

import { useInteraction } from "@shared/lib";
import {
  Interaction,
  AddInteractionCallback,
  MapStore,
  DrawingStore,
  InteractionsStore,
} from "@shared/misc";

import { SourceContext } from "../../../layers/ui/VectorLayer/VectorLayer";

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

interface Props {
  source?: VectorSource;
  map: Map | null;
  type: Interaction;
}

const Draw = ({ source, map, type }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return InteractionsStore.addDraw(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Select = ({ source, map, type }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return InteractionsStore.addSelectAndTranslate(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Modify = ({ source, map, type }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return InteractionsStore.addModify(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Snap = ({ source, map, type }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return InteractionsStore.addSnap(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

export default observer(Drawing);
