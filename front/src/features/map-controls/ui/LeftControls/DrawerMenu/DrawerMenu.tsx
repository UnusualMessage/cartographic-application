import { Drawer, Typography, MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";

import { about } from "@shared/assets";
import { measurementLayerId } from "@shared/constants";
import { useQueryNavigate } from "@shared/lib";
import {
  ControlsStore,
  DrawType,
  LayersStore,
  InteractionsStore,
  MapControl,
  DrawerStore,
  FullScreenStore,
} from "@shared/misc";

import { drawerMenu } from "../../../model";

const { Text } = Typography;

const DrawerMenu = () => {
  const open = DrawerStore.open;
  const active = FullScreenStore.active;
  const { navigateWithQuery } = useQueryNavigate();

  const switchType = (type: DrawType) => {
    LayersStore.clearVectorLayer(measurementLayerId);
    InteractionsStore.drawType = type;
    DrawerStore.hide();
  };

  const choose = (type: MapControl) => {
    ControlsStore.currentMapControl = type;
    DrawerStore.hide();
  };

  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "measure-coordinate":
        choose("measurement");
        switchType(e.key);
        break;
      case "measure-length":
        choose("measurement");
        switchType(e.key);
        break;
      case "measure-area":
        choose("measurement");
        switchType(e.key);
        break;
      case "none":
        choose("edit");
        switchType(e.key);
        break;
      case "cursor":
        choose("edit");
        switchType(e.key);
        break;
      case "geozones":
        choose("edit");
        switchType(e.key);
        break;
      case "full-screen":
        FullScreenStore.enter();
        DrawerStore.hide();
        break;
      case "print":
        navigateWithQuery("../print", "x", "y", "z");
        DrawerStore.hide();
        break;
      case "search":
        choose("search");
        break;
      case "layers":
        choose("layers");
        break;
      default:
        choose("share");
    }
  };

  return (
    <Drawer
      title="Выбор опции"
      placement="left"
      open={open}
      onClose={() => DrawerStore.hide()}
      width={320}
      footer={<Text>{`© 2023 ${about.title}`}</Text>}
      getContainer={active ? false : ""}
      bodyStyle={{ padding: 0 }}
    >
      <Menu items={drawerMenu} selectable={false} onClick={onClick} />
    </Drawer>
  );
};

export default observer(DrawerMenu);
