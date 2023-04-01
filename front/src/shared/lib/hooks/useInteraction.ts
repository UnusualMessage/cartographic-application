import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useEffect } from "react";

import type {
  AddInteractionCallback,
  Callback,
  InteractionType,
} from "../../misc";
import { invoke } from "../utils";

interface Props {
  source?: VectorSource;
  map?: Map;
  type: InteractionType;
}

export const useInteraction = (
  callback: AddInteractionCallback,
  allowedTypes: InteractionType[],
  { source, map, type }: Props
) => {
  useEffect(() => {
    if (!allowedTypes.includes(type)) {
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
