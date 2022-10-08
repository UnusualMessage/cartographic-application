import { Position, Toaster, useHotkeys } from "@blueprintjs/core";
import { useMemo, useRef } from "react";

import { wrapper } from "./view.module.scss";

import Sider from "../../../components/Sider";
import Map from "../../../components/Map";
import Footer from "../../../components/Footer";
import { FeaturesChangesStore } from "../../../stores/changes";

const View = () => {
  const ref = useRef<Toaster>(null);

  const hotkeys = useMemo(
    () => [
      {
        combo: "Shift+Q",
        global: true,
        label: "Save changes",
        onKeyDown: () => {
          ref.current?.show({
            message: "Изменения сохранены",
            timeout: 1000,
            intent: "success",
          });

          FeaturesChangesStore.save();
        },
      },

      {
        combo: "Shift+Z",
        global: true,
        label: "Undo changes",
        onKeyDown: () => {
          ref.current?.show({
            message: "Изменение отменено",
            timeout: 1000,
            intent: "success",
          });

          FeaturesChangesStore.undo();
        },
      },
    ],
    []
  );
  const { handleKeyDown, handleKeyUp } = useHotkeys(hotkeys);

  return (
    <>
      <Toaster position={Position.TOP} ref={ref} />

      <div className={wrapper} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
        <Sider />
        <Map />
      </div>

      <Footer />
    </>
  );
};

export default View;
