import { Menu, MenuProps, MenuRef } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, Ref } from "react";

import { clean } from "@shared/lib";
import {
  Callback,
  MapStore,
  ContextMenuService,
  ContextMenuStore,
} from "@shared/misc";

import { hidden, wrapper } from "./menu.module.scss";
import { mapMenu } from "../model";

const close = () => {
  ContextMenuService.close();
};

const copy = () => {
  ContextMenuService.copy();
};

const insert = () => {
  ContextMenuService.insert();
};

const remove = () => {
  ContextMenuService.remove();
};

const onClick: MenuProps["onClick"] = (context) => {
  switch (context.key) {
    case "copy":
      copy();
      break;
    case "close":
      close();
      break;
    case "insert":
      insert();
      break;
    case "delete":
      remove();
  }
};

const ContextMenu = () => {
  const ref: Ref<MenuRef> = useRef(null);
  const map = MapStore.map;
  const active = ContextMenuStore.active;

  useEffect(() => {
    const element = ref.current?.menu?.list;

    let cleanups: Callback[] = [];
    if (element && map) {
      cleanups = ContextMenuStore.init(element, map);
    }

    return () => {
      clean(cleanups);
    };
  }, [map]);

  const className = active ? wrapper : hidden;

  return (
    <Menu
      className={className}
      onClick={onClick}
      items={mapMenu}
      ref={ref}
      selectable={false}
    />
  );
};

export default observer(ContextMenu);
