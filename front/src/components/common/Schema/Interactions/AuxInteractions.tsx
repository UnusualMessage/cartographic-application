import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

import { SourceContext } from "../Layer/VectorLayer";
import { InteractionsStore, MapStore } from "../../../../stores/map";
import Interactions from "./Interactions";
import VectorSource from "ol/source/Vector";
import { Map } from "ol";
import { InteractionType } from "../../../../types/map";

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
  useEffect(() => {
    if (map && source) {
      InteractionsStore.setupMeasurementTool(source, map);
    }

    return () => {
      InteractionsStore.removeInteractions(map);
    };
  }, [map, type]);

  return <></>;
};

export default observer(AuxInteractions);
