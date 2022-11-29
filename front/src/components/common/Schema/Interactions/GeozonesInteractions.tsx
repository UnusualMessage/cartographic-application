import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

import { SourceContext } from "../Layer/VectorLayer";
import { InteractionsStore, MapStore } from "../../../../stores/map";
import Interactions from "./Interactions";
import VectorSource from "ol/source/Vector";
import { Map } from "ol";
import { InteractionType } from "../../../../types/map";

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

interface Props {
  source?: VectorSource;
  map: Map | null;
  type: InteractionType;
}

const Draw = ({ source, map, type }: Props) => {
  useEffect(() => {
    if (map && source) {
      InteractionsStore.addDraw(source, map);
    }

    return () => {
      InteractionsStore.removeDraw(map);
    };
  }, [map, type]);

  return <></>;
};

const Select = ({ source, map, type }: Props) => {
  useEffect(() => {
    if (map && source) {
      InteractionsStore.addSelectAndTranslate(source, map);
    }

    return () => {
      InteractionsStore.removeSelect(map);
      InteractionsStore.removeTranslate(map);
    };
  }, [map, type]);

  return <></>;
};

const Modify = ({ source, map, type }: Props) => {
  useEffect(() => {
    if (map && source) {
      InteractionsStore.addModify(source, map);
    }

    return () => {
      InteractionsStore.removeModify(map);
    };
  }, [map, type]);

  return <></>;
};

const Snap = ({ source, map, type }: Props) => {
  useEffect(() => {
    if (map && source) {
      InteractionsStore.addSnap(source, map);
    }

    return () => {
      InteractionsStore.removeSnap(map);
    };
  }, [map, type]);

  return <></>;
};

export default observer(GeozonesInteractions);
