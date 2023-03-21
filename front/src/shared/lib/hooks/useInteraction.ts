import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useEffect } from "react";

import type { DrawType, AddInteractionCallback, Callback } from "../../misc";
import { invoke } from "../utils";

interface Props {
  source?: VectorSource;
  map?: Map;
  type: DrawType;
}

export const useInteraction = (
  callback: AddInteractionCallback,
  { source, map, type }: Props
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
