import { Menu as AntMenu, MenuProps, MenuRef } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, Ref } from "react";

import { invoke } from "@shared/lib";
import {
  Callback,
  MapStore,
  OverlaysStore,
  FeaturesService,
} from "@shared/misc";

import { hidden, wrapper } from "./menu.module.scss";
import { mapMenu } from "../model";

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

const Menu = () => {
  const contextMenuRef: Ref<MenuRef> = useRef(null);
  const map = MapStore.map;
  const active = OverlaysStore.isContextMenuActive;

  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
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

  useEffect(() => {
    const element = contextMenuRef.current?.menu?.list;

    let cleanups: Callback[] = [];
    if (element && map) {
      cleanups = OverlaysStore.initContextMenu(element, map);
    }

    return () => {
      for (const cleanup of cleanups) {
        invoke(cleanup);
      }
    };
  }, [map]);

  const classes = classNames({
    [hidden]: !active,
    [wrapper]: active,
  });

  return (
    <AntMenu
      className={classes}
      onClick={onClick}
      items={mapMenu}
      ref={contextMenuRef}
      selectable={false}
    />
  );
};

export default observer(Menu);