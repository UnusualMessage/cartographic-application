import { observer } from "mobx-react-lite";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useContext } from "react";

import { SourceContext } from "@shared/constants";
import { useInteraction } from "@shared/lib";
import {
  AddInteractionCallback,
  MapStore,
  InteractionsStore,
  DrawStore,
  DrawType,
} from "@shared/misc";

const Measurement = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = InteractionsStore.drawType;

  const addInteraction: AddInteractionCallback = (map, source) => {
    return DrawStore.setup(type, source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

interface Props {
  source?: VectorSource;
  map: Map | null;
  type: DrawType;
}

const MeasureLength = ({ source, map }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return DrawStore.setup("measure-length", source, map);
  };

  useInteraction(addInteraction, { source, map, type: "measure-length" });

  return <></>;
};

const MeasureArea = ({ source, map }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return DrawStore.setup("measure-area", source, map);
  };

  useInteraction(addInteraction, { source, map, type: "measure-area" });

  return <></>;
};

export default observer(Measurement);
