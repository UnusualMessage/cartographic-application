import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { createContext, PropsWithChildren, useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";

import { LayersService } from "../../../../services/map";

export const SourceContext = createContext<VectorSource | undefined>(undefined);

const VectorLayer = ({ children }: PropsWithChildren) => {
  const vectorSource = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
    });
  }, []);

  useEffect(() => {
    const createdLayer = LayersService.createVectorLayer(vectorSource);

    return () => {
      LayersService.removeVectorLayer(createdLayer);
    };
  }, []);

  return (
    <SourceContext.Provider value={vectorSource}>
      {children}
    </SourceContext.Provider>
  );
};

export default observer(VectorLayer);
