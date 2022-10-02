import { useCallback, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

import { hidden, wrapper } from "./menu.module.scss";

import OverlaysStore from "../../../stores/OverlaysStore";
import MapStore from "../../../stores/MapStore";
import LayersStore from "../../../stores/LayersStore";
import FeaturesStore from "../../../stores/FeaturesStore";

const ContextMenu = () => {
  const contextMenuRef = useRef<HTMLUListElement>(null);
  const map = MapStore.map;
  const active = OverlaysStore.isContextMenuActive;

  const selectedFeatures = FeaturesStore.selectedFeatures;
  const copiedFeatures = FeaturesStore.copiedFeatures;

  const close = () => {
    OverlaysStore.hideContextMenu();
  };

  const copy = useCallback(() => {
    FeaturesStore.copiedFeatures = selectedFeatures;
    OverlaysStore.hideContextMenu();
  }, [selectedFeatures]);

  const insert = useCallback(() => {
    const layer = LayersStore.drawLayer;
    OverlaysStore.insert(layer, copiedFeatures);
  }, [copiedFeatures]);

  const remove = useCallback(() => {
    const layer = LayersStore.drawLayer;
    OverlaysStore.delete(layer, selectedFeatures);
  }, [selectedFeatures]);

  useEffect(() => {
    const element = contextMenuRef.current;

    if (element && map) {
      OverlaysStore.initContextMenu(element, map);
    }
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

export default observer(ContextMenu);
