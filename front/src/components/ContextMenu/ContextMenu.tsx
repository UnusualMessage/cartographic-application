import {
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import css from "./menu.module.scss";

import OverlaysStore from "../../stores/OverlaysStore";
import MapStore from "../../stores/MapStore";
import LayersStore from "../../stores/LayersStore";

const ContextMenu = () => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const map = MapStore.getMap;
  const active = OverlaysStore.isContextMenuActive;

  const selectedFeatures = OverlaysStore.selectedFeatures;
  const copiedFeatures = OverlaysStore.copiedFeatures;

  const onClick = () => {
    OverlaysStore.hideContextMenu();
  };

  const copy = useCallback(() => {
    OverlaysStore.copy();
  }, [selectedFeatures]);

  const insert = useCallback(() => {
    const layer = LayersStore.drawLayer;

    if (layer) {
      OverlaysStore.insert(layer);
    }
  }, [copiedFeatures]);

  const remove = useCallback(() => {
    const layer = LayersStore.drawLayer;

    if (layer) {
      OverlaysStore.delete(layer);
    }
  }, [selectedFeatures]);

  useEffect(() => {
    const element = contextMenuRef.current;

    if (element && map) {
      OverlaysStore.initContextMenu(element, map);
    }
  }, [map]);

  const classes = classNames({
    [css.hidden]: !active,
    [css.wrapper]: active,
  });

  return (
    <Paper className={classes} ref={contextMenuRef}>
      <MenuList>
        <MenuItem onClick={copy}>
          <ListItemText>Копировать</ListItemText>
          <Typography variant="body1" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>

        <MenuItem onClick={insert}>
          <ListItemText>Вставить</ListItemText>
          <Typography variant="body1" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>

        <MenuItem onClick={remove}>
          <ListItemText>Удалить</ListItemText>
          <Typography variant="body1" color="text.secondary">
            ⌘D
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
