import { Position, Toaster, useHotkeys } from "@blueprintjs/core";
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { observer } from "mobx-react-lite";

import { wrapper } from "./edit.module.scss";

import Sider from "../../../components/Sider";
import { EditMap } from "../../../components/Map";
import Footer from "../../../components/Footer";
import { HistoryService } from "../../../services/history";
import Loader from "../../../components/common/Loader";
import FeaturesTree from "../../../components/Sider/FeaturesTree";
import Changes from "../../../components/Sider/Changes";

const Edit = () => {
  const ref = useRef<Toaster>(null);

  useLayoutEffect(() => {
    HistoryService.toaster = ref.current;
  }, []);

  const hotkeys = useMemo(
    () => [
      {
        combo: "Shift+Q",
        global: true,
        label: "Save changes",
        onKeyDown: () => {
          HistoryService.save();
        },
      },

      {
        combo: "Shift+Z",
        global: true,
        label: "Undo changes",
        onKeyDown: () => {
          HistoryService.undo();
        },
      },
    ],
    []
  );
  const { handleKeyDown, handleKeyUp } = useHotkeys(hotkeys);

  return (
    <React.Suspense fallback={<Loader />}>
      <Toaster position={Position.TOP} ref={ref} />

      <Sider>
        <FeaturesTree />
        <Changes />
      </Sider>
      <div className={wrapper} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
        <EditMap />
        <Footer />
      </div>
    </React.Suspense>
  );
};

export default observer(Edit);
