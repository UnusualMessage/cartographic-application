import { Position, Toaster, useHotkeys } from "@blueprintjs/core";
import { useLayoutEffect, useMemo, useRef } from "react";

import { wrapper } from "./view.module.scss";

import Sider from "../../../components/Sider";
import Map from "../../../components/Map";
import Footer from "../../../components/Footer";
import { HistoryService } from "../../../services/history";

const View = () => {
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
    <>
      <Toaster position={Position.TOP} ref={ref} />

      <Sider />
      <div className={wrapper} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default View;
