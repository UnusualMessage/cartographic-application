import { Drawer, Typography, MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";

import { about } from "@shared/assets";
import { measurementLayerId } from "@shared/constants";
import { useQueryNavigate } from "@shared/lib";
import {
  ControlsStore,
  InteractionsStore,
  MapControls,
  DrawerStore,
  FullScreenStore,
  Interactions,
  LayersService,
} from "@shared/misc";

import { drawerMenu } from "../model";

const { Text } = Typography;

const DrawerMenu = () => {
  const open = DrawerStore.open;
  const active = FullScreenStore.active;
  const { navigateWithQuery } = useQueryNavigate();

  const switchType = (type: Interactions) => {
    LayersService.clearVectorLayer(measurementLayerId);
    InteractionsStore.type = type;
  };

  const switchControl = (type: MapControls) => {
    ControlsStore.currentMapControl = type;
  };

  const onClick: MenuProps["onClick"] = (context) => {
    const type = context.key;

    switch (type) {
      case "measure-coordinate":
        switchControl(MapControls.measurement);
        switchType(Interactions.coordinate);
        break;
      case "measure-length":
        switchControl(MapControls.measurement);
        switchType(Interactions.length);
        break;
      case "measure-area":
        switchControl(MapControls.measurement);
        switchType(Interactions.area);
        break;
      case "none":
        switchControl(MapControls.edit);
        switchType(Interactions.none);
        break;
      case "cursor":
        switchControl(MapControls.edit);
        switchType(Interactions.cursor);
        break;
      case "geozones":
        switchControl(MapControls.edit);
        switchType(Interactions.geozones);
        break;
      case "full-screen":
        FullScreenStore.enter();
        break;
      case "print":
        navigateWithQuery("../print", "x", "y", "z");
        break;
      case "share":
        switchControl(MapControls.share);
        break;
      case "search":
        switchControl(MapControls.search);
        break;
      case "layers":
        switchControl(MapControls.layers);
    }

    DrawerStore.hide();
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
