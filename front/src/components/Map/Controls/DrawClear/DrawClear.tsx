import { observer } from "mobx-react-lite";
import { Button } from "@blueprintjs/core";

import LayersStore from "../../../../stores/LayersStore";

const DrawClear = () => {
  const onButtonClick = () => {
    LayersStore.clearDrawLayer();
  };

  return <Button onClick={onButtonClick} text={"Очистить"} />;
};

export default observer(DrawClear);
