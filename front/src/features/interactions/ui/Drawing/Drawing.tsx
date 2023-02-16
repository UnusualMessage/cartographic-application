import { observer } from "mobx-react-lite";
import { Map } from "ol";
import VectorSource from "ol/source/Vector";
import { useContext } from "react";

import { useInteraction } from "@shared/lib";
import {
  DrawType,
  AddInteractionCallback,
  MapStore,
  InteractionsStore,
  DrawStore,
  SelectStore,
  ModifyStore,
  SnapStore,
} from "@shared/misc";

import { SourceContext } from "../../../layers/ui/VectorLayer/VectorLayer";

const Drawing = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = InteractionsStore.drawType;

  const props = {
    source,
    map,
    type,
  };

  return (
    <>
      <Draw {...props} />
      <Select {...props} />
      <Modify {...props} />
      <Snap {...props} />
    </>
  );
};

interface Props {
  source?: VectorSource;
  map: Map | null;
  type: DrawType;
}

const Draw = ({ source, map, type }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return DrawStore.setup(type, source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Select = ({ source, map, type }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return SelectStore.setup(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Modify = ({ source, map, type }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return ModifyStore.setup(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

const Snap = ({ source, map, type }: Props) => {
  const addInteraction: AddInteractionCallback = (map, source) => {
    return SnapStore.setup(source, map);
  };

  useInteraction(addInteraction, { source, map, type });

  return <></>;
};

export default observer(Drawing);
