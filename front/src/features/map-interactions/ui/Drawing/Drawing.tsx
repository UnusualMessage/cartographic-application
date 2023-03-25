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
  SelectStore,
  ModifyStore,
  SnapStore,
  InteractionType,
} from "@shared/misc";

const Drawing = () => {
  const source = useContext(SourceContext);
  const map = MapStore.map;
  const type = InteractionsStore.type;

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
  map?: Map;
  type: InteractionType;
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
