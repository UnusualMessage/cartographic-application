import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useEffect } from "react";

import { Callback, Interaction } from "@shared/misc";

import { invoke } from "../utils";

export type AddEventListener = (map: Map, source: VectorSource) => Callback;

export interface InteractionProps {
  source?: VectorSource;
  map: Map | null;
  type: Interaction;
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
