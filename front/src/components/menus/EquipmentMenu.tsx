import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

import { wrapper } from "./menu.module.scss";

const EquipmentMenu = () => {
  return (
    <Menu className={wrapper}>
      <MenuDivider title="Техника" />
      <MenuItem icon="duplicate" text="Выбрать" label="⌘C" />
      <MenuItem icon="clipboard" text="Вставить" label="⌘V" />
      <MenuItem icon="delete" text="Удалить" label="⌘D" />
      <MenuDivider />
      <MenuItem icon="cross" text="Закрыть" label="⌘R" />
    </Menu>
  );
};

export default EquipmentMenu;
