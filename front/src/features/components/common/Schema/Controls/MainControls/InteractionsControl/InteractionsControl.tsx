import { Button } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import DrawerStore from "@shared/api/stores/ControlsStore";

import { wrapper } from "./menu.module.scss";
import Geocoder from "../Geocoder";

const InteractionsControl = () => {
  const active = DrawerStore.mapDrawerActive;

  const showDrawer = () => {
    DrawerStore.showDrawer();
  };

  const hideDrawer = () => {
    DrawerStore.hideDrawer();
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
