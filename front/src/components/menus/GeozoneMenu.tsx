import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { GeozonesStore } from "../../stores/entities";
import { AlertsStore } from "../../stores/ui";

interface Props {
  id: string;
}

const GeozoneMenu = ({ id }: Props) => {
  const onExport = () => {
    AlertsStore.info = JSON.stringify(
      GeozonesStore.getById(id)?.geometry,
      null,
      2
    );
    AlertsStore.isOpen = true;
  };

  return (
    <Menu>
      <MenuDivider title="Геозона" />
      <MenuItem
        icon="export"
        text="Экспортировать"
        label="⌘C"
        onClick={onExport}
      />
    </Menu>
  );
};

export default observer(GeozoneMenu);
