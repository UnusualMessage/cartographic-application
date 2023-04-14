import { debounce } from "lodash";
import { toFixed } from "ol/math";
import { fromLonLat, toLonLat } from "ol/proj";
import { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { ViewContext } from "@shared/constants";

const Memo = () => {
  const [viewParams, setViewParams] = useSearchParams();
  const view = useContext(ViewContext);

  useEffect(() => {
    if (!view) {
      return;
    }

    const x = viewParams.get("x") ?? "0";
    const y = viewParams.get("y") ?? "0";
    const zoom = viewParams.get("z") ?? "1";

    const center = fromLonLat([Number(x), Number(y)]);

    view.setCenter(center);
    view.setZoom(Number(zoom));

    const onViewChange = debounce(() => {
      let center = view.getCenter();
      const zoom = view.getZoom();

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

    view.on(["change:center", "change:resolution"], onViewChange);

    return () => {
      view.un(["change:center", "change:resolution"], onViewChange);
    };
  }, [view]);

  return <></>;
};

export default Memo;
