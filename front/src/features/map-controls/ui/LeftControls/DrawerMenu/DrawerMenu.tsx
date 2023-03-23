import { Drawer, Typography, MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { about } from "@shared/assets";
import { measurementLayerId } from "@shared/constants";
import {
  ControlsStore,
  DrawType,
  LayersStore,
  InteractionsStore,
  MapControl,
} from "@shared/misc";

import { drawerMenu } from "../../../model";

const { Text } = Typography;

const DrawerMenu = () => {
  const isOpen = ControlsStore.mapDrawerActive;

  const navigate = useNavigate();

  const close = () => {
    ControlsStore.hideDrawer();
  };

  const switchType = (type: DrawType) => {
    LayersStore.clearVectorLayer(measurementLayerId);
    const drawType = InteractionsStore.drawType;

    if (drawType === type) {
      InteractionsStore.drawType = "none";
    } else {
      InteractionsStore.drawType = type;
    }

    ControlsStore.hideDrawer();
  };

  const choose = (type: MapControl) => {
    ControlsStore.currentMapControl = type;
    ControlsStore.hideDrawer();
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
        ControlsStore.fullScreenHandle?.enter();
        ControlsStore.hideDrawer();
        break;
      case "print":
        choose("print");
        navigate("../print");
        break;
      default:
        choose(e.key as MapControl);
    }
  };

  return (
    <Drawer
      title="Выбор опции"
      placement="left"
      open={isOpen}
      onClose={close}
      width={320}
      footer={<Text>{`© 2023 ${about.title}`}</Text>}
      getContainer={ControlsStore.fullScreenActive ? false : ""}
      bodyStyle={{ padding: 0 }}
    >
      <Menu items={drawerMenu} selectable={false} onClick={onClick} />
    </Drawer>
  );
};

export default observer(DrawerMenu);
