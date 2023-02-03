import { Menu as DefaultMenu, MenuDivider, MenuItem } from "@blueprintjs/core";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";

import { hidden, wrapper } from "./menu.module.scss";
import { Callback } from "../../../../../entities/services/listeners/ListenersInjector";
import { FeaturesService } from "../../../../../entities/services/map";
import { MapStore, OverlaysStore } from "../../../../../entities/stores/map";

const Menu = () => {
  const contextMenuRef = useRef<HTMLUListElement>(null);
  const map = MapStore.map;
  const active = OverlaysStore.isContextMenuActive;

  const close = () => {
    FeaturesService.close();
  };

  const copy = () => {
    FeaturesService.copy();
  };

  const insert = () => {
    FeaturesService.insert();
  };

  const remove = () => {
    FeaturesService.remove();
  };

  useEffect(() => {
    const element = contextMenuRef.current;

    let cleanups: Callback[] = [];
    if (element && map) {
      cleanups = OverlaysStore.initContextMenu(element, map);
    }

    return () => {
      for (const cleanup of cleanups) {
        cleanup();
      }
    };
  }, [map]);

  const classes = classNames({
    [hidden]: !active,
    [wrapper]: active,
  });

  return (
    <DefaultMenu className={classes} ulRef={contextMenuRef}>
      <MenuDivider title="Редактирование" />
      <MenuItem icon="duplicate" text="Копировать" label="⌘C" onClick={copy} />
      <MenuItem icon="clipboard" text="Вставить" label="⌘V" onClick={insert} />
      <MenuItem icon="delete" text="Удалить" label="⌘D" onClick={remove} />
      <MenuDivider title="Другое" />
      <MenuItem icon="cross" text="Закрыть" label="⌘R" onClick={close} />
    </DefaultMenu>
  );
};

export default observer(Menu);
