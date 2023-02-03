import { observer } from "mobx-react-lite";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useContext } from "react";

import { InteractionType } from "@shared/api/types/map";
import { useInteraction } from "@shared/lib";
import { AddEventListener } from "@shared/lib/hooks/useInteraction";

import Interactions from "./Interactions";
import {
  InteractionsStore,
  MapStore,
} from "../../../../../entities/stores/map";
import { SourceContext } from "../Layer/VectorLayer";

const AuxInteractions = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = InteractionsStore.interactionType;

  const props = {
    source,
    map,
    type,
  };

  if (!InteractionsStore.isAuxInteractionsActive) {
    return <></>;
  }

  return <Interactions>{<Measurement {...props} />}</Interactions>;
};

interface Props {
  source?: VectorSource;
  map: Map | null;
  type: InteractionType;
}

const Measurement = ({ source, map, type }: Props) => {
  const addInteraction: AddEventListener = (map, source) => {
    return InteractionsStore.setupMeasurementTool(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

export default observer(AuxInteractions);
