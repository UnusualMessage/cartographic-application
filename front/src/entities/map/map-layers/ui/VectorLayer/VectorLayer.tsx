import VectorSource from "ol/source/Vector";
import { StyleLike } from "ol/style/Style";
import { PropsWithChildren, useContext } from "react";

import { SourceContext, GroupContext } from "@shared/constants";
import { useLayer } from "@shared/lib";
import { LayersService } from "@shared/misc";

import Drawing from "./modules/Drawing";
import Measurement from "./modules/Measurement";

interface Zoom {
  max?: number;
  min?: number;
}

interface Props extends PropsWithChildren {
  id: string;
  source: VectorSource;
  style?: StyleLike;
  zoom?: Zoom;
}

const VectorLayer = ({ children, id, source, style, zoom }: Props) => {
  const group = useContext(GroupContext);

  useLayer(
    () =>
      LayersService.createVectorLayer(source, id, style, zoom?.min, zoom?.max),
    group,
    [source]
  );

  return (
    <SourceContext.Provider value={source}>{children}</SourceContext.Provider>
  );
};

VectorLayer.Drawing = Drawing;
VectorLayer.Measurement = Measurement;

export default VectorLayer;
