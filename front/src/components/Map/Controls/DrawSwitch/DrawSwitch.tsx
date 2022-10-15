import { observer } from "mobx-react-lite";
import { Switch } from "@blueprintjs/core";

import { InteractionsStore } from "../../../../stores";

const DrawSwitch = () => {
  const onSwitch = () => {
    InteractionsStore.readonly = !InteractionsStore.readonly;
  };

  return (
    <Switch
      labelElement={<strong>Редактирование</strong>}
      onChange={onSwitch}
      checked={!InteractionsStore.readonly}
    />
  );
};

export default observer(DrawSwitch);
