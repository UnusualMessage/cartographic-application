import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";

import LayersStore from "../../../stores/LayersStore";

const DrawClear = () => {
  const onButtonClick = () => {
    LayersStore.clearDrawLayer();
  };

  return <Button onClick={onButtonClick}>Очистить</Button>;
};

export default observer(DrawClear);
