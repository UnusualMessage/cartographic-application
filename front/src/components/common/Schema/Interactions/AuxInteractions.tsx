import { observer } from "mobx-react-lite";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useContext } from "react";

import { useInteraction } from "../../../../shared/hooks";
import { AddEventListener } from "../../../../shared/hooks/useInteraction";
import { InteractionsStore, MapStore } from "../../../../stores/map";
import { InteractionType } from "../../../../types/map";
import { SourceContext } from "../Layer/VectorLayer";
import Interactions from "./Interactions";

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
