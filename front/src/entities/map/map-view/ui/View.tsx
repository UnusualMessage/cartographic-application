import { useEffect, PropsWithChildren, useMemo } from "react";

import { ViewContext } from "@shared/constants";
import { MapStore, ViewService } from "@shared/misc";

import Memo from "./modules/Memo";

const View = ({ children }: PropsWithChildren) => {
  const view = useMemo(() => ViewService.createView(), []);

  useEffect(() => {
    MapStore.addView(view);

    return () => {
      MapStore.disposeView();
    };
  }, [view]);

  return <ViewContext.Provider value={view}>{children}</ViewContext.Provider>;
};

View.Memo = Memo;

export default View;
