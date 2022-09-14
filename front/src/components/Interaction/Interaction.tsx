import VectorSource from "ol/source/Vector";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

import { InteractionType } from "../../types/InteractionType";
import MapStore from "../../stores/MapStore";
import { SourceContext } from "../Layer/VectorLayer";
import InteractionsStore from "../../stores/InteractionsStore";

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

const Snap = observer(({ source }: ChildrenProps) => {
  useEffect(() => {
    MapStore.addSnap(source);
  }, []);

  return <></>;
});

const Select = observer(() => {
  useEffect(() => {
    MapStore.addSelect();
  }, []);

  return <></>;
});

const Modify = observer(({ source }: ChildrenProps) => {
  useEffect(() => {
    MapStore.addModify(source);
  }, []);

  return <></>;
});

const Draw = observer(({ source }: ChildrenProps) => {
  const drawType = InteractionsStore.getDrawType;

  useEffect(() => {
    MapStore.addDraw(source, drawType);

    return () => {
      MapStore.removeDraw();
    };
  }, [drawType]);

  return <></>;
});

export default observer(Interaction);
