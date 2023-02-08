import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useEffect } from "react";

import { Callback, InteractionType } from "@shared/api";
import { invoke } from "@shared/lib/utils/common";

export type AddEventListener = (map: Map, source: VectorSource) => Callback;

export interface InteractionProps {
  source?: VectorSource;
  map: Map | null;
  type: InteractionType;
}

export const useInteraction = (
  callback: AddEventListener,
  { source, map, type }: InteractionProps
) => {
  useEffect(() => {
    let clean: Callback;

    if (source && map) {
      clean = callback(map, source);
    }

    return () => {
      invoke(clean);
    };
  }, [map, type, source]);
};
