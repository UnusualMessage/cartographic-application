import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

import { SourceContext } from "../Layer/VectorLayer";
import { InteractionsStore, MapStore } from "../../../../stores/map";

const Interactions = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = InteractionsStore.interactionType;

  useEffect(() => {
    if (map && source) {
      InteractionsStore.addInteractions(source, map);
    }

    return () => {
      InteractionsStore.removeInteractions(map);
    };
  }, [map, type]);

  return <></>;
};

export default observer(Interactions);
