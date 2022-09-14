import VectorSource from "ol/source/Vector";
import { useContext, useEffect } from "react";

import { InteractionType } from "../../types/InteractionType";
import MapStore from "../../stores/MapStore";
import { SourceContext } from "../Layer/VectorLayer";

interface Props {
  type: InteractionType;
}

const Interaction = ({ type }: Props) => {
  const source = useContext(SourceContext);

  if (source) {
    switch (type) {
      case InteractionType.draw:
        return <Draw source={source} />;

      case InteractionType.modify:
        return <Modify source={source} />;

      case InteractionType.select:
        return <Select />;

      case InteractionType.snap:
        return <Snap source={source} />;

      default:
        return <></>;
    }
  }

  return <></>;
};

interface ChildrenProps {
  source: VectorSource;
}

const Snap = ({ source }: ChildrenProps) => {
  useEffect(() => {
    MapStore.addSnap(source);
  });

  return <></>;
};

const Select = () => {
  useEffect(() => {
    MapStore.addSelect();
  });

  return <></>;
};

const Modify = ({ source }: ChildrenProps) => {
  useEffect(() => {
    MapStore.addModify(source);
  });

  return <></>;
};

const Draw = ({ source }: ChildrenProps) => {
  useEffect(() => {
    MapStore.addDraw(source);
  });

  return <></>;
};

export default Interaction;
