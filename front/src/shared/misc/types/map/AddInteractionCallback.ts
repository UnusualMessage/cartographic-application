import { Map } from "ol";
import VectorSource from "ol/source/Vector";

import { Callback } from "../common";

export type AddInteractionCallback = (
  map: Map,
  source: VectorSource
) => Callback;
