import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

import { SourceContext } from "../Layer/AuxLayer";
import { InteractionsStore, MapStore } from "../../../stores";

const AuxInteractions = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;

  useEffect(() => {
    if (map && source) {
      InteractionsStore.setupMeasurementTool(source, map);
    }

    return () => {
      InteractionsStore.removeInteractions(map);
    };
  }, [map]);

  return <></>;
};

export default observer(AuxInteractions);
