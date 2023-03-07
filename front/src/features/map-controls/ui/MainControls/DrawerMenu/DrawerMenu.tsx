import { Drawer, Typography, MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";

import { about, drawerMenu } from "@shared/assets";
import { auxLayerId } from "@shared/constants";
import {
  ControlsStore,
  DrawType,
  LayersStore,
  InteractionsStore,
} from "@shared/misc";
import { ControlType } from "@shared/misc/stores/ControlsStore";

const { Text } = Typography;

const DrawerMenu = () => {
  const isOpen = ControlsStore.mapDrawerActive;

  const close = () => {
    ControlsStore.hideDrawer();
  };

  const switchType = (type: DrawType) => {
    LayersStore.clearVectorLayer(auxLayerId);
    const drawType = InteractionsStore.drawType;

    if (drawType === type) {
      InteractionsStore.drawType = "none";
    } else {
      InteractionsStore.drawType = type;
    }

    ControlsStore.hideDrawer();
  };

  const choose = (type: ControlType) => {
    ControlsStore.currentMapControl = type;
  };

  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "measure-length":
        choose(e.key as ControlType);
        switchType(e.key);
        break;
      case "measure-area":
        choose(e.key as ControlType);
        switchType(e.key);
        break;
      case "none":
        switchType(e.key);
        break;
      case "cursor":
        switchType(e.key);
        break;
      case "geozones":
        switchType(e.key);
        break;
      default:
        choose(e.key as ControlType);
    }
  };

  return (
    <Drawer
      title="Выбор опции"
      placement="left"
      open={isOpen}
      onClose={close}
      footer={<Text>{`© 2022 ${about.title}`}</Text>}
      getContainer={ControlsStore.fullScreenActive ? false : ""}
      bodyStyle={{ padding: 0 }}
    >
      <Menu items={drawerMenu} selectable={false} onClick={onClick} />
    </Drawer>
  );
};

export default observer(DrawerMenu);
