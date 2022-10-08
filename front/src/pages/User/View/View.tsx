import { Position, Toaster, useHotkeys } from "@blueprintjs/core";
import { useMemo, useRef } from "react";

import { wrapper } from "./view.module.scss";

import Sider from "../../../components/Sider";
import Map from "../../../components/Map";
import Footer from "../../../components/Footer";
import InteractionsStore from "../../../stores/InteractionsStore";

const View = () => {
  const ref = useRef<Toaster>(null);

  const hotkeys = useMemo(
    () => [
      {
        combo: "Shift+Q",
        global: true,
        label: "Save changes",
        onKeyDown: () => {
          if (!InteractionsStore.saved) {
            ref.current?.show({ message: "Изменения сохранены" });
            InteractionsStore.saveChanges();
          }
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
