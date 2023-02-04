import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useEffect } from "react";

import { InteractionProps } from "@features/components/common/Schema/Interactions/GeozonesInteractions";
import { Callback } from "@shared/api";

import { invoke } from "../utils";

export type AddEventListener = (map: Map, source: VectorSource) => Callback;

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
