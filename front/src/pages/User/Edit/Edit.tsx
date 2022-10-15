import { Position, Toaster, useHotkeys } from "@blueprintjs/core";
import { useLayoutEffect, useMemo, useRef } from "react";
import { observer } from "mobx-react-lite";

import { wrapper } from "./edit.module.scss";

import Sider from "../../../components/Sider";
import { EditMap } from "../../../components/Map";
import Footer from "../../../components/Footer";
import { HistoryService } from "../../../services/history";

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
    <>
      <Toaster position={Position.TOP} ref={ref} />

      <Sider />
      <div className={wrapper} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
        <EditMap />
        <Footer />
      </div>
    </>
  );
};

export default observer(Edit);
