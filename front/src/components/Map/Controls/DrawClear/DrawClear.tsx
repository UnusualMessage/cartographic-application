import { observer } from "mobx-react-lite";
import { Button } from "@blueprintjs/core";

import { LayersService } from "../../../../services/map";

const DrawClear = () => {
  const onButtonClick = () => {
    LayersService.clearLayer();
  };

  return <Button onClick={onButtonClick} text={"Очистить"} />;
};

export default observer(DrawClear);
