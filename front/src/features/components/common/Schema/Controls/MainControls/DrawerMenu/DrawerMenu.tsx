import {
  Classes,
  Drawer,
  DrawerSize,
  Menu,
  MenuDivider,
  MenuItem,
  Position,
} from "@blueprintjs/core";
import { ControlType } from "@entities/stores/ui/ControlsStore";
import { observer } from "mobx-react-lite";

import { InteractionType } from "@shared/api/types/map";
import { auxLayerId } from "@shared/assets/map/config";
import { about } from "@shared/assets/samples/about";

import {
  InteractionsStore,
  LayersStore,
} from "../../../../../../../entities/stores/map";
import { ControlsStore } from "../../../../../../../entities/stores/ui";

const DrawerMenu = () => {
  const isOpen = ControlsStore.mapDrawerActive;

  const close = () => {
    ControlsStore.hideDrawer();
  };

  const switchType = (type: InteractionType) => {
    LayersStore.clearVectorLayer(auxLayerId);
    const interactionType = InteractionsStore.interactionType;

    if (interactionType === type) {
      InteractionsStore.interactionType = "none";
    } else {
      InteractionsStore.interactionType = type;
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
      icon="menu"
      title="Выбор опции"
      isOpen={isOpen}
      onClose={close}
      size={DrawerSize.SMALL}
      position={Position.LEFT}
      usePortal={!ControlsStore.fullScreenActive}
    >
      <div className={Classes.DRAWER_BODY}>
        <div className={Classes.DIALOG_BODY}>
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
        </div>
      </div>
      <div className={Classes.DRAWER_FOOTER}>{`© 2022 ${about.title}`}</div>
    </Drawer>
  );
};

export default observer(DrawerMenu);
