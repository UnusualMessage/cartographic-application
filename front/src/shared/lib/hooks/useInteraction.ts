import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useEffect } from "react";

import type {
  AddInteractionCallback,
  Callback,
  Interactions,
} from "../../misc";
import { invoke } from "../utils";

interface Props {
  source?: VectorSource;
  map?: Map;
  type: Interactions;
}

export const useInteraction = (
  callback: AddInteractionCallback,
  allowedInteractions: Interactions[],
  { source, map, type }: Props
) => {
  useEffect(() => {
    if (!allowedInteractions.includes(type)) {
      return;
    }

    let cleanup: Callback;

    if (source && map) {
      cleanup = callback(map, source);
    }

    return () => {
      invoke(cleanup);
    };
  }, [map, type, source]);
};
