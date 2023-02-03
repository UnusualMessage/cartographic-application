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
