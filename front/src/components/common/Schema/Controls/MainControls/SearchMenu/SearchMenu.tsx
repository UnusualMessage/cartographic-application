import { Button } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { wrapper } from "./menu.module.scss";

import Geocoder from "../Geocoder";
import DrawerStore from "../../../../../../stores/ui/DrawerStore";

const SearchMenu = () => {
  const active = DrawerStore.mapDrawerActive;

  const showDrawer = () => {
    DrawerStore.show();
  };

  const hideDrawer = () => {
    DrawerStore.hide();
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

export default observer(SearchMenu);
