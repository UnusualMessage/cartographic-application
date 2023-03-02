import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { Drawer, Typography } from "antd";
import { observer } from "mobx-react-lite";

import { about } from "@shared/assets";
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

  const handleIntent = (type: ControlType) => {
    if (ControlsStore.currentMapControl === type) {
      return "primary";
    } else {
      return "none";
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
      <Menu large>
        <MenuItem
          icon="search"
          text="Поиск"
          intent={handleIntent("search")}
          onClick={() => choose("search")}
        />
        <MenuItem
          icon="layers"
          text="Слои"
          intent={handleIntent("layers")}
          onClick={() => choose("layers")}
        />
        <MenuDivider />

        <MenuItem
          icon="select"
          text="Измерение"
          intent={handleIntent("measurement")}
          onClick={() => choose("measurement")}
        >
          <MenuItem
            icon="one-to-one"
            text="Расстояние"
            onClick={() => {
              choose("measurement");
              switchType("measure-length");
            }}
          />
          <MenuItem
            icon="polygon-filter"
            text="Площадь"
            onClick={() => {
              choose("measurement");
              switchType("measure-area");
            }}
          />
        </MenuItem>

        <MenuItem
          icon="edit"
          text="Рисование"
          intent={handleIntent("drawing")}
          onClick={() => choose("drawing")}
        >
          <MenuItem
            icon="ban-circle"
            text="Обычный режим"
            onClick={() => switchType("none")}
          />
          <MenuItem
            icon="hand-down"
            text="Курсор"
            onClick={() => switchType("cursor")}
          />
          <MenuItem icon="selection" text="Точка" />
          <MenuItem
            icon="new-layer"
            text="Многоугольник"
            onClick={() => switchType("geozones")}
          />
        </MenuItem>
        <MenuDivider />

        <MenuItem
          icon="fullscreen"
          text="Полный экран"
          intent={handleIntent("full-screen")}
          onClick={() => choose("full-screen")}
        />
        <MenuItem
          icon="share"
          text="Поделиться"
          intent={handleIntent("share")}
          onClick={() => choose("share")}
        />
        <MenuItem
          icon="print"
          text="Печать"
          intent={handleIntent("print")}
          onClick={() => choose("print")}
        />

        <MenuDivider />
        <MenuItem
          icon="help"
          text="О проекте"
          intent={handleIntent("about")}
          onClick={() => choose("about")}
        />
      </Menu>
    </Drawer>
  );
};

export default observer(DrawerMenu);
