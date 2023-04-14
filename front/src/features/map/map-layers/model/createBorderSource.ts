import { GeoJSON } from "ol/format";
import { bbox } from "ol/loadingstrategy";
import VectorSource from "ol/source/Vector";

import { geoserverUrl } from "@shared/constants";

export const createBorderSource = (id: string) => {
  return new VectorSource({
    format: new GeoJSON(),
    url: (extent) => {
      const bbox = extent.join(",");

      return `${geoserverUrl}?service=WFS&version=1.0.0&request=GetFeature&typeName=agrosoft:${id}&outputFormat=application/json&bbox=${bbox}`;
    },
    strategy: bbox,
  });
};
