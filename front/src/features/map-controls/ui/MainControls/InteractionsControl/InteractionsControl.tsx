import { Button } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { Geocoder } from "@entities/geocoder";
import { ControlsStore } from "@shared/misc";

import { wrapper } from "./menu.module.scss";

const InteractionsControl = () => {
  const active = ControlsStore.mapDrawerActive;

  const showDrawer = () => {
    ControlsStore.showDrawer();
  };

  const hideDrawer = () => {
    ControlsStore.hideDrawer();
  };

  return (
    <div className={wrapper}>
      <Button
        onClick={active ? hideDrawer : showDrawer}
        minimal
        icon={active ? "menu-open" : "menu-closed"}
        intent={active ? "primary" : "none"}
      />
      <Geocoder />
      <Button minimal icon={"search"} />
    </div>
  );
};

export default observer(InteractionsControl);
