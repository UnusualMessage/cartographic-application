import {
  Classes,
  Drawer,
  DrawerSize,
  Menu,
  MenuDivider,
  MenuItem,
  Position,
} from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { ControlsStore } from "../../../../../../stores/ui";
import { InteractionType } from "../../../../../../types/map";
import { InteractionsStore, LayersStore } from "../../../../../../stores/map";
import { auxLayerId } from "../../../../../../assets/map/config";

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
            <MenuItem icon="search" text="Поиск" />
            <MenuItem icon="layers" text="Слои" />
            <MenuDivider />

            <MenuItem icon="select" text="Измерение">
              <MenuItem
                icon="one-to-one"
                text="Расстояние"
                onClick={() => switchType("measure-length")}
              />
              <MenuItem
                icon="polygon-filter"
                text="Площадь"
                onClick={() => switchType("measure-area")}
              />
            </MenuItem>

            <MenuItem icon="edit" text="Рисование">
              <MenuItem icon="selection" text="Точка" />
              <MenuItem
                icon="new-layer"
                text="Многоугольник"
                onClick={() => switchType("geozones")}
              />
              <MenuItem icon="circle" text="Окружность" />
              <MenuItem
                icon="hand-down"
                text="Курсор"
                onClick={() => switchType("cursor")}
              />
            </MenuItem>
            <MenuDivider />

            <MenuItem icon="fullscreen" text="Полный экран" />
            <MenuItem icon="share" text="Поделиться" />
            <MenuItem icon="print" text="Печать" />

            <MenuDivider />
            <MenuItem icon="help" text="О проекте" />
          </Menu>
        </div>
      </div>
      <div className={Classes.DRAWER_FOOTER}>© 2022 AгрОруэлл</div>
    </Drawer>
  );
};

export default observer(DrawerMenu);
