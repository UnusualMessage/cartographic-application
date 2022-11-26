import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

import { hidden, wrapper } from "./menu.module.scss";

import { MapStore, OverlaysStore } from "../../stores/map";
import { FeaturesService } from "../../services/map";
import { Callback } from "../../services/listeners/ListenersInjector";

const MapMenu = () => {
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
    <Menu className={classes} ulRef={contextMenuRef}>
      <MenuDivider title="Редактирование" />
      <MenuItem icon="duplicate" text="Копировать" label="⌘C" onClick={copy} />
      <MenuItem icon="clipboard" text="Вставить" label="⌘V" onClick={insert} />
      <MenuItem icon="delete" text="Удалить" label="⌘D" onClick={remove} />
      <MenuDivider title="Другое" />
      <MenuItem icon="cross" text="Закрыть" label="⌘R" onClick={close} />
    </Menu>
  );
};

export default observer(MapMenu);
