import { debounce } from "lodash";
import { observer } from "mobx-react-lite";
import { toFixed } from "ol/math";
import { fromLonLat, toLonLat } from "ol/proj";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { MapStore, ViewStore } from "@shared/misc";

const View = () => {
  const [viewParams, setViewParams] = useSearchParams();

  useEffect(() => {
    const x = viewParams.get("x") ?? "0";
    const y = viewParams.get("y") ?? "0";
    const zoom = viewParams.get("z") ?? "1";

    const center = fromLonLat([Number(x), Number(y)]);
    const createdView = ViewStore.createView(Number(zoom), center);

    const onViewChange = debounce(() => {
      let center = createdView.getCenter();
      const zoom = createdView.getZoom();

      if (!center || !zoom) {
        return;
      }

      center = toLonLat(center);
      const searchParams = new URLSearchParams();

      searchParams.append("x", toFixed(center[0], 2).toString());
      searchParams.append("y", toFixed(center[1], 2).toString());
      searchParams.append("z", toFixed(zoom, 2).toString());

      setViewParams(searchParams);
    }, 100);

    createdView.on(["change:center", "change:resolution"], onViewChange);

    MapStore.addView(createdView);

    return () => {
      createdView.un(["change:center", "change:resolution"], onViewChange);
      ViewStore.dispose();
    };
  }, []);

  return <></>;
};

export default observer(View);
