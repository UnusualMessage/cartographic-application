import { useEffect } from "react";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";

import { Callback } from "../../../types/common";
import { invoke } from "../utils/common/invoke";
import { InteractionProps } from "../../../components/common/Schema/Interactions/GeozonesInteractions";

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
