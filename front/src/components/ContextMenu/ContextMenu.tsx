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

import OverlaysStore from "../../stores/OverlaysStore";
import MapStore from "../../stores/MapStore";

const ContextMenu = () => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const map = MapStore.getMap;
  const active = OverlaysStore.isContextMenuActive;

  useEffect(() => {
    const element = contextMenuRef.current;

    if (element && map) {
      OverlaysStore.initContextMenu(element, map);
    }
  }, [map]);

  let position = "absolute";
  if (active) {
    position = "static";
  }

  return (
    <Paper
      sx={{ width: 320, maxWidth: "100%", position: position }}
      ref={contextMenuRef}
    >
      <MenuList>
        <MenuItem>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default observer(ContextMenu);
