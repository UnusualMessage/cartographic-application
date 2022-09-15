import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

import MapStore from "../../stores/MapStore";
import { SourceContext } from "../Layer/VectorLayer";
import InteractionsStore from "../../stores/InteractionsStore";

const Interactions = () => {
  const source = useContext(SourceContext);
  const map = MapStore.getMap;
  const drawType = InteractionsStore.getDrawType;

  useEffect(() => {
    if (map && source) {
      InteractionsStore.addInteractions(source, map);
    }
  }, [map, drawType]);

  return <></>;
};

export default observer(Interactions);
