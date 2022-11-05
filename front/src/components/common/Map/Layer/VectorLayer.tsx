import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import { createContext, PropsWithChildren, useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";

import { LayersService } from "../../../../services/map";
import { StyleLike } from "ol/style/Style";

export const SourceContext = createContext<VectorSource | undefined>(undefined);

interface Props extends PropsWithChildren {
  id: string;
  style?: StyleLike;
}

const VectorLayer = ({ children, id, style }: Props) => {
  const vectorSource = useMemo(() => {
    return new VectorSource({
      format: new GeoJSON(),
    });
  }, []);

  useEffect(() => {
    LayersService.createVectorLayer(vectorSource, id, style);

    return () => {
      LayersService.removeVectorLayer(id);
    };
  }, []);

  return (
    <SourceContext.Provider value={vectorSource}>
      {children}
    </SourceContext.Provider>
  );
};

export default observer(VectorLayer);
