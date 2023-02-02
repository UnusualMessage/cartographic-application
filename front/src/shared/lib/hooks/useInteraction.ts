import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useEffect } from "react";

import { InteractionProps } from "../../../features/common/Schema/Interactions/GeozonesInteractions";
import { Callback } from "../../../types/common";
import { invoke } from "../utils/common/invoke";

export type AddEventListener = (map: Map, source: VectorSource) => Callback;

const useInteraction = (
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

export default useInteraction;
