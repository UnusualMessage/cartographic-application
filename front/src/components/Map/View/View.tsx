import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { debounce } from "lodash";
import { observer } from "mobx-react-lite";

import ViewStore from "../../../stores/ViewStore";
import MapStore from "../../../stores/MapStore";

const View = () => {
  const [viewParams, setViewParams] = useSearchParams();

  useEffect(() => {
    const x = viewParams.get("x") ?? "0";
    const y = viewParams.get("y") ?? "0";
    const zoom = viewParams.get("z") ?? "1";

    const createdView = ViewStore.createView(Number(zoom), [
      Number(x),
      Number(y),
    ]);

    const onViewChange = debounce(() => {
      const center = createdView.getCenter();
      const zoom = createdView.getZoom();

      if (!center || !zoom) {
        return;
      }

      const searchParams = new URLSearchParams();

      searchParams.append("x", center[0].toString());
      searchParams.append("y", center[1].toString());
      searchParams.append("z", zoom.toString());

      setViewParams(searchParams);
    }, 100);

    createdView.on("change:center", onViewChange);

    MapStore.addView(createdView);

    return () => {
      createdView.un("change:center", onViewChange);
    };
  }, []);

  return <></>;
};

export default observer(View);
