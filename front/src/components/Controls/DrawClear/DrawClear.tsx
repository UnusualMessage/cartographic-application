import { Button } from "@mui/material";
import LayersStore from "../../../stores/LayersStore";

const DrawClear = () => {
  const onButtonClick = () => {
    LayersStore.clearDrawLayer();
  };

  return <Button onClick={onButtonClick}>Очистить</Button>;
};

export default DrawClear;
