import {
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import css from "./menu.module.scss";

import OverlaysStore from "../../stores/OverlaysStore";
import MapStore from "../../stores/MapStore";

const ContextMenu = () => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const map = MapStore.getMap;
  const active = OverlaysStore.isContextMenuActive;
  
  const onClick = () => {
    OverlaysStore.hideContextMenu();
  };

  useEffect(() => {
    const element = contextMenuRef.current;

    if (element && map) {
      OverlaysStore.initContextMenu(element, map);
    }
  }, [map]);

  const classes = classNames({
    [css.hidden]: !active,
    [css.wrapper]: active
  });
  
  return (
    <Paper
      className={classes}
      ref={contextMenuRef}
    >
      <MenuList>
        <MenuItem>
          <ListItemText>Копировать</ListItemText>
          <Typography variant="body1" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText>Вставить</ListItemText>
          <Typography variant="body1" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onClick}>
          <ListItemText>Закрыть</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default observer(ContextMenu);
