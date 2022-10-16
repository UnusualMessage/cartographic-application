import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

import { SourceContext } from "../Layer/AuxLayer";
import { InteractionsStore, MapStore } from "../../../stores";

const AuxInteractions = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const mode = InteractionsStore.measurementMode;

  useEffect(() => {
    if (map && source) {
      InteractionsStore.setupMeasurementTool(source, map, mode);
    }

    return () => {
      InteractionsStore.removeInteractions(map);
    };
  }, [map, mode]);

  return <></>;
};

export default observer(AuxInteractions);
